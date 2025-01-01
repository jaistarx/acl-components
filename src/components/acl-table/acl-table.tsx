import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  Box,
  Checkbox,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
  TableSortLabel,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import React, { useMemo, useState } from 'react';
import { TableComponents, TableVirtuoso } from 'react-virtuoso';
import { AclThemeProvider, stringifyObjectValues } from '../../common';
import { IDictionary } from '../../common/types';
import {
  NO_DATA_MESSAGE,
  OUTER_CONTAINER,
  TABLE_CELL,
  TABLE_CELL_COLLAPSIBLE_CONTENT,
  TABLE_HEAD_SPAN,
  TABLE_ROW_COLLAPSIBLE_CONTENT,
  TABLE_ROW_SPAN,
  TABLE_VIRTUOSO,
} from './acl-table.constant';
import { AclTableColDef, AclTableProps, AclTableVirtuosoContext, Order } from './acl-table.type';

const getForwardedProps = (props: AclTableProps) => {
  const {
    rowItems,
    columnItems,
    onRowClick,
    selectedRows,
    hideCheckbox,
    stickyLastColumn,
    defaultSelectedRows,
    defaultSortingKey,
    defaultSortingOrder,
    noDataText,
    disableRowSelect,
    hasCollapsibleContent,
    ...forwardedProps
  } = props;

  return {
    ...forwardedProps,
  };
};

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
}

const getComparator = <Key extends string | number | symbol>(
  order: Order,
  orderBy: Key,
): ((a: { [key in Key]: number | string | symbol }, b: { [key in Key]: number | string | symbol }) => number) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

const VirtuosoTableComponents = (
  contextValues: AclTableVirtuosoContext,
): TableComponents<IDictionary<any>, AclTableVirtuosoContext> => {
  return {
    // NOTE: Use if needed
    // Scroller: React.forwardRef<HTMLDivElement>((props, ref) => <TableContainer component={Box} {...props} ref={ref} />),
    Table: (props) => <Table {...props} />,
    TableHead: React.forwardRef<HTMLTableSectionElement>((props, ref) => <TableHead {...props} ref={ref} />),
    TableRow: ({ item, ...props }) => {
      const { columnItems, selectedRows, handleClick, openCollapsibleContent, props: contextProps } = contextValues;
      const stringifiedRow = stringifyObjectValues(item);
      const isItemSelected = contextProps.disableRowSelect ? false : selectedRows.includes(stringifiedRow);
      const collapsibleColSpan =
        columnItems?.length +
        Number(Boolean(contextProps.hideCheckbox)) +
        Number(Boolean(contextProps.hasCollapsibleContent)) +
        1;

      return (
        <>
          <TableRow
            {...props}
            hover={!contextProps.disableRowSelect}
            onClick={(event) => handleClick(event, item)}
            role="checkbox"
            aria-checked={isItemSelected}
            tabIndex={-1}
            key={stringifiedRow}
            selected={isItemSelected}
          />
          {contextProps.hasCollapsibleContent && (
            <TableRow
              aria-checked={isItemSelected}
              tabIndex={-1}
              selected={isItemSelected}
              hover={false}
              role="checkbox"
              style={TABLE_ROW_COLLAPSIBLE_CONTENT}
              onClick={(event) => {
                event?.preventDefault();
                event?.stopPropagation();
              }}
            >
              <TableCell
                style={TABLE_CELL_COLLAPSIBLE_CONTENT(openCollapsibleContent[stringifiedRow])}
                colSpan={collapsibleColSpan}
              >
                <Collapse in={openCollapsibleContent[stringifiedRow]} timeout="auto" unmountOnExit>
                  <Box component="div">{item.collapsibleContent}</Box>
                </Collapse>
              </TableCell>
            </TableRow>
          )}
        </>
      );
    },
    TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => <TableBody {...props} ref={ref} />),
    TableFoot: React.forwardRef<HTMLTableSectionElement>((props, ref) => <TableFooter {...props} ref={ref} />),
  };
};

function fixedHeaderContent<T>(context: AclTableVirtuosoContext) {
  const { selectedRows, columnItems, rowItems, handleSelectAllClick, order, orderBy, handleRequestSort, props } =
    context;
  const selectedLength = selectedRows.length;
  const rowLength = rowItems?.length;

  const createSortHandler = (property: keyof T) => (event: React.MouseEvent<unknown>) => {
    const selection = window.getSelection();

    if (selection?.type === 'Range') {
      return;
    }

    handleRequestSort(event, property);
  };

  return (
    <TableRow>
      {props.hasCollapsibleContent && <TableCell padding="checkbox" variant="head" />}
      {!props?.hideCheckbox && (
        <TableCell padding="checkbox" variant="head">
          <Checkbox
            color="primary"
            indeterminate={props.disableRowSelect ? false : selectedLength > 0 && selectedLength < rowLength}
            checked={props.disableRowSelect ? false : rowLength > 0 && selectedLength === rowLength}
            onChange={handleSelectAllClick}
            inputProps={{
              'aria-label': 'select all',
            }}
          />
        </TableCell>
      )}
      {columnItems.map((column: AclTableColDef<T>) => (
        <TableCell
          key={String(column.field)}
          variant="head"
          sx={TABLE_CELL(column, props)}
          sortDirection={orderBy === column.field ? order : false}
        >
          {column.sortable === false || rowItems.length === 0 ? (
            <span>{column.headerName}</span>
          ) : (
            <TableSortLabel
              active={orderBy === column.field}
              direction={orderBy === column.field ? order : 'asc'}
              onClick={createSortHandler(column.field)}
              IconComponent={ArrowDropDownIcon}
            >
              <Box component="span" sx={TABLE_HEAD_SPAN}>
                {column.headerName}
              </Box>
              {orderBy === column.field ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          )}
        </TableCell>
      ))}
    </TableRow>
  );
}

const rowContent = (index: number, row: IDictionary<any>, context: AclTableVirtuosoContext) => {
  const { selectedRows, columnItems, props, openCollapsibleContent, setOpenCollapsibleContent } = context;
  const stringifiedRow = stringifyObjectValues(row);

  const handleCollapseIconClick = (event: React.MouseEvent<unknown>) => {
    event?.stopPropagation();
    event?.preventDefault();

    setOpenCollapsibleContent((prev) => ({
      ...prev,
      [stringifiedRow]: !prev[stringifiedRow],
    }));
  };

  return (
    <>
      {props.hasCollapsibleContent && (
        <TableCell padding="checkbox">
          <IconButton aria-label="expand row" size="small" onClick={handleCollapseIconClick}>
            <KeyboardArrowDownIcon
              sx={{
                transition: 'all 2s ease-out',
                transform: `${openCollapsibleContent[stringifiedRow] ? 'rotate(180deg)' : ''}`,
              }}
            />
          </IconButton>
        </TableCell>
      )}
      {!props?.hideCheckbox && (
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            checked={props.disableRowSelect ? false : selectedRows.includes(stringifiedRow)}
            inputProps={{
              'aria-labelledby': `row-checkbox-${index}`,
            }}
          />
        </TableCell>
      )}
      {columnItems?.map((column: AclTableColDef) => (
        <TableCell key={String(column.field)} sx={TABLE_CELL(column, props)}>
          <Box component="span" sx={TABLE_ROW_SPAN}>
            {row[column.field]}
          </Box>
        </TableCell>
      ))}
    </>
  );
};

const emptyRowContent = (context: AclTableVirtuosoContext) => {
  const { props } = context;

  return (
    <Box component="div" sx={NO_DATA_MESSAGE}>
      <Typography component="span" color="text.primary">
        {props.noDataText ?? 'No data to display'}
      </Typography>
    </Box>
  );
};

const AclTable = ({ children, ...props }: AclTableProps) => {
  const forwardedProps = getForwardedProps(props);
  const [selectedStringified, setSelectedStringified] = useState<readonly string[]>(
    props.defaultSelectedRows?.map((row) => stringifyObjectValues(row)) ?? [],
  );
  const [selected, setSelected] = useState<readonly IDictionary<any>[]>(props.defaultSelectedRows ?? []);
  const [order, setOrder] = useState<Order>(props.defaultSortingOrder ?? 'asc');
  const [orderBy, setOrderBy] = useState<string | number | symbol>(props.defaultSortingKey ?? '');
  const [openCollapsibleContent, setOpenCollapsibleContent] = useState<IDictionary<boolean>>({});

  const sortedRowItems = useMemo(() => {
    if (Array.isArray(props.defaultSelectedRows)) {
      setSelected(props.defaultSelectedRows);
      setSelectedStringified(props.defaultSelectedRows?.map((row) => stringifyObjectValues(row)));
    } else {
      setSelected([]);
      setSelectedStringified([]);
    }

    if (!props.rowItems || props.rowItems.length === 0) return [];

    if (orderBy === '') return [...props.rowItems];

    return [...props.rowItems].sort(getComparator(order, orderBy));
  }, [props.rowItems, order, orderBy, props.defaultSelectedRows]);

  const handleRequestSort = (_event: React.MouseEvent<unknown>, property: string | number | symbol) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

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
    const selection = window.getSelection();

    if (selection?.type === 'Range') {
      return;
    }

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

    props.onRowClick?.(event, row);
    props.selectedRows?.(newSelected);
    setSelected(newSelected);
    setSelectedStringified(newSelectedStringified);
  };

  const contextValues: AclTableVirtuosoContext = {
    rowItems: sortedRowItems,
    columnItems: props.columnItems,
    selectedRows: selectedStringified,
    handleSelectAllClick,
    handleClick,
    order,
    orderBy,
    handleRequestSort,
    props,
    openCollapsibleContent,
    setOpenCollapsibleContent,
  };

  return (
    <ThemeProvider theme={AclThemeProvider}>
      <Box component="div" sx={OUTER_CONTAINER}>
        <TableVirtuoso
          style={TABLE_VIRTUOSO}
          totalCount={props.totalCount ?? sortedRowItems.length}
          data={sortedRowItems}
          components={VirtuosoTableComponents(contextValues)}
          fixedHeaderContent={() => fixedHeaderContent(contextValues)}
          itemContent={(index, row) => rowContent(index, row, contextValues)}
          context={contextValues}
          overscan={{ main: 5, reverse: 5 }}
          {...forwardedProps}
        />
        {sortedRowItems.length === 0 && emptyRowContent(contextValues)}
      </Box>
    </ThemeProvider>
  );
};

export default AclTable;
