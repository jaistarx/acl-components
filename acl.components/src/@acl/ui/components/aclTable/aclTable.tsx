import { Checkbox, Table, TableBody, TableCell, TableFooter, TableHead, TableRow, ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import { TableComponents, TableVirtuoso } from 'react-virtuoso';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import { stringifyObjectValues } from '../../common/helpers/common.helper';
import { IDictionary } from '../../common/types/common.type';
import { OUTER_CONTAINER, TABLE_CELL, TABLE_VIRTUOSO } from './aclTable.constant';
import { AclTableColDef, AclTableProps, AclTableVirtuosoContext } from './aclTable.type';

const getPassedProps = (props: AclTableProps) => {
  const {
    rowItems,
    columnItems,
    onRowClick,
    selectedRows,
    hideCheckbox,
    stickyLastColumn,
    defaultSelectedRows,
    ...passedProps
  } = props;

  return {
    ...passedProps,
  };
};

const VirtuosoTableComponents = (
  selectedRows: readonly string[],
  handleClick: (_event: React.MouseEvent<unknown>, row: IDictionary<any>) => void,
): TableComponents<IDictionary<any>, AclTableVirtuosoContext> => {
  return {
    // NOTE: Use if needed
    // Scroller: React.forwardRef<HTMLDivElement>((props, ref) => <TableContainer component={Box} {...props} ref={ref} />),
    Table: (props) => <Table {...props} />,
    TableHead: React.forwardRef<HTMLTableSectionElement>((props, ref) => <TableHead {...props} ref={ref} />),
    TableRow: ({ item, ...props }) => {
      const stringifiedRow = stringifyObjectValues(item);
      const isItemSelected = selectedRows.includes(stringifiedRow);

      return (
        <TableRow
          {...props}
          hover
          onClick={(event) => handleClick(event, item)}
          role="checkbox"
          aria-checked={isItemSelected}
          tabIndex={-1}
          key={stringifiedRow}
          selected={isItemSelected}
        />
      );
    },
    TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => <TableBody {...props} ref={ref} />),
    TableFoot: React.forwardRef<HTMLTableSectionElement>((props, ref) => <TableFooter {...props} ref={ref} />),
  };
};

const fixedHeaderContent = (context: AclTableVirtuosoContext) => {
  const { selectedRows, columnItems, rowItems, handleSelectAllClick, props } = context;
  const selectedLength = selectedRows.length;
  const rowLength = rowItems?.length;

  return (
    <TableRow>
      {!props?.hideCheckbox && (
        <TableCell padding="checkbox" variant="head">
          <Checkbox
            color="primary"
            indeterminate={selectedLength > 0 && selectedLength < rowLength}
            checked={rowLength > 0 && selectedLength === rowLength}
            onChange={handleSelectAllClick}
            inputProps={{
              'aria-label': 'select all',
            }}
          />
        </TableCell>
      )}
      {columnItems.map((column) => (
        <TableCell key={String(column.field)} variant="head" sx={TABLE_CELL(column, props)}>
          {column.headerName}
        </TableCell>
      ))}
    </TableRow>
  );
};

const rowContent = (index: number, row: IDictionary<any>, context: AclTableVirtuosoContext) => {
  const { selectedRows, columnItems, props } = context;
  return (
    <>
      {!props?.hideCheckbox && (
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            checked={selectedRows.includes(stringifyObjectValues(row))}
            inputProps={{
              'aria-labelledby': `row-checkbox-${index}`,
            }}
          />
        </TableCell>
      )}
      {columnItems?.map((column: AclTableColDef) => (
        <TableCell key={String(column.field)} sx={TABLE_CELL(column, props)}>
          {row[column.field]}
        </TableCell>
      ))}
    </>
  );
};

const AclTable = ({ children, ...props }: AclTableProps) => {
  const passedProps = getPassedProps(props);
  const [selectedStringified, setSelectedStringified] = useState<readonly string[]>(
    props.defaultSelectedRows?.map((row) => stringifyObjectValues(row)) ?? [],
  );
  const [selected, setSelected] = useState<readonly IDictionary<any>[]>(props.defaultSelectedRows ?? []);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    event?.stopPropagation();
    event?.preventDefault();

    if (event.target.checked) {
      const newSelected = props.rowItems.map((row) => stringifyObjectValues(row));
      props.selectedRows?.(props.rowItems);
      setSelected(props.rowItems);
      setSelectedStringified(newSelected);
      return;
    }
    props.selectedRows?.([]);
    setSelected([]);
    setSelectedStringified([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, row: IDictionary<any>) => {
    event?.stopPropagation();
    event?.preventDefault();

    const stringifiedRow = stringifyObjectValues(row);
    const selectedIndex = selectedStringified.indexOf(stringifiedRow);
    let newSelectedStringified: readonly string[] = [];
    let newSelected: readonly IDictionary<any>[] = [];

    if (selectedIndex === -1) {
      newSelectedStringified = newSelectedStringified.concat(selectedStringified, stringifiedRow);
      newSelected = newSelected.concat(selected, row);
    } else if (selectedIndex === 0) {
      newSelectedStringified = newSelectedStringified.concat(selectedStringified.slice(1));
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selectedStringified.length - 1) {
      newSelectedStringified = newSelectedStringified.concat(selectedStringified.slice(0, -1));
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedStringified = newSelectedStringified.concat(
        selectedStringified.slice(0, selectedIndex),
        selectedStringified.slice(selectedIndex + 1),
      );
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    props.onRowClick?.(row);
    props.selectedRows?.(newSelected);
    setSelected(newSelected);
    setSelectedStringified(newSelectedStringified);
  };

  const contextValues: AclTableVirtuosoContext = {
    rowItems: props.rowItems,
    columnItems: props.columnItems,
    selectedRows: selectedStringified,
    handleSelectAllClick,
    handleClick,
    props,
  };

  return (
    <ThemeProvider theme={AclThemeProvider}>
      <div style={OUTER_CONTAINER}>
        <TableVirtuoso
          style={TABLE_VIRTUOSO}
          data={props.rowItems}
          components={VirtuosoTableComponents(selectedStringified, handleClick)}
          fixedHeaderContent={() => fixedHeaderContent(contextValues)}
          fixedFooterContent={() => fixedHeaderContent(contextValues)}
          itemContent={rowContent}
          context={contextValues}
          overscan={{ main: 5, reverse: 5 }}
          {...passedProps}
        />
      </div>
    </ThemeProvider>
  );
};

export default AclTable;
