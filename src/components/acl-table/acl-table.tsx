import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  Backdrop,
  Box,
  Checkbox,
  CircularProgress,
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
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { TableComponents, TableVirtuoso } from 'react-virtuoso';
import { AclThemeProvider, IDictionary, stringifyObjectValues } from '../../common';
import {
  NO_DATA_MESSAGE,
  OUTER_CONTAINER,
  TABLE_BACKDROP_LOADER,
  TABLE_CELL,
  TABLE_CELL_COLLAPSIBLE_CONTENT,
  TABLE_HEAD_SPAN,
  TABLE_ROW_COLLAPSIBLE_CONTENT,
  TABLE_ROW_SPAN,
  TABLE_VIRTUOSO,
} from './acl-table.constant';
import { AclTableColDef, AclTableProps, AclTableVirtuosoContext, Order, OrderBy } from './acl-table.type';

const getForwardedProps = (props: AclTableProps) => {
  const {
    rowItems,
    columnItems,
    onRowClick,
    onChangeSelectedRows,
    selectedRows,
    hideCheckbox,
    stickyLastColumn,
    defaultSelectedRows,
    noDataText,
    disableRowSelect,
    hasCollapsibleContent,
    onSelectAll,
    defaultSortingState,
    getSortingState,
    sortingFunction,
    loading,
    ...forwardedProps
  } = props;

  return {
    ...forwardedProps,
  };
};

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  const valueA = a[orderBy] ?? '';
  const valueB = b[orderBy] ?? '';

  if (typeof valueA === 'string' && typeof valueB === 'string') {
    return valueB.localeCompare(valueA, undefined, { sensitivity: 'base' });
  }

  if (typeof valueA === 'number' && typeof valueB === 'number') {
    return valueB - valueA;
  }

  if (valueB < valueA) return -1;
  if (valueB > valueA) return 1;

  return 0;
}

const getComparator = <T, Field extends keyof T>(
  order: Order,
  orderBy: Field,
  sortingFunction?: (a: T[Field], b: T[Field]) => number,
): ((a: T, b: T) => number) => {
  return (a, b) => {
    if (sortingFunction) {
      return order === 'desc' ? sortingFunction(b[orderBy], a[orderBy]) : sortingFunction(a[orderBy], b[orderBy]);
    }

    return order === 'desc' ? descendingComparator(a, b, orderBy) : -descendingComparator(a, b, orderBy);
  };
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
        columnItems.length +
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
            data-testid="body-row"
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
              data-testid="body-row"
            >
              <TableCell
                style={TABLE_CELL_COLLAPSIBLE_CONTENT(openCollapsibleContent[stringifiedRow])}
                colSpan={collapsibleColSpan}
              >
                {openCollapsibleContent[stringifiedRow] && <Box component="div">{item.collapsibleContent}</Box>}
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
  const rowLength = rowItems.length;

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
      {!props.hideCheckbox && (
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
    event.stopPropagation();
    event.preventDefault();

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
      {!props.hideCheckbox && (
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
      {columnItems.map((column: AclTableColDef) => (
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
  const [order, setOrder] = useState<Order>(props.defaultSortingState?.order ?? 'asc');
  const [orderBy, setOrderBy] = useState<OrderBy>(props.defaultSortingState?.field ?? '');
  const [openCollapsibleContent, setOpenCollapsibleContent] = useState<IDictionary<boolean>>({});

  // NOTE: rowItemsRef is used for tracking previous rowItems value
  const rowItemsRef = useRef<IDictionary<any>[]>(props.rowItems);

  const handleSetSelectedRows = (selectedRows: IDictionary<any>[]) => {
    setSelected(selectedRows);
    setSelectedStringified(selectedRows.map((row) => stringifyObjectValues(row)));
  };

  const handleRequestSort = (_event: React.MouseEvent<unknown>, property: OrderBy) => {
    const isAsc = orderBy === property && order === 'asc';
    const sortingOrder = isAsc ? 'desc' : 'asc';
    props.getSortingState?.({ field: property, order: sortingOrder });
    setOrder(sortingOrder);
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    event.preventDefault();
    props.onSelectAll?.(event);

    const totalItems = props.rowItems.length;
    const selectedCount = selected.length;
    const shouldUnselectAll = totalItems > 0 && selectedCount > 0 && selectedCount <= totalItems;

    if (shouldUnselectAll) {
      props.onChangeSelectedRows?.(event, []);
      handleSetSelectedRows([]);
    } else {
      props.onChangeSelectedRows?.(event, props.rowItems);
      handleSetSelectedRows(props.rowItems);
    }
  };

  const handleClick = (event: React.MouseEvent<unknown>, row: IDictionary<any>) => {
    const selection = window.getSelection();

    if (selection?.type === 'Range') {
      return;
    }

    event.stopPropagation();
    event.preventDefault();

    const stringifiedRow = stringifyObjectValues(row);
    const selectedIndex = selectedStringified.indexOf(stringifiedRow);
    let newSelectedStringified: string[] = [];
    let newSelected: IDictionary<any>[] = [];

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
    props.onChangeSelectedRows?.(event, newSelected);
    setSelected(newSelected);
    setSelectedStringified(newSelectedStringified);
  };

  const sortedRowItems = useMemo(() => {
    if (!props.rowItems || props.rowItems.length === 0) return [];

    if (orderBy === '') return [...props.rowItems];

    return [...props.rowItems].sort(getComparator(order, orderBy, props.sortingFunction));
  }, [props.rowItems, order, orderBy, props.sortingFunction]);

  useEffect(() => {
    if (props.rowItems?.length <= 0) return;

    if (Array.isArray(props.selectedRows) && Array.isArray(props.rowItems)) {
      if (props.selectedRows.length > props.rowItems.length)
        console.warn(
          `Warning: The number of "selectedRows" (${props.selectedRows.length}) exceeds the number of "rowItems" (${props.rowItems.length}). Please ensure that the value passed to "selectedRows" is correct.`,
        );
    }

    if (Array.isArray(props.selectedRows)) {
      handleSetSelectedRows(props.selectedRows);
    } else if (rowItemsRef.current !== props.rowItems) {
      handleSetSelectedRows([]);
    } else {
      setSelected((prevValue) => prevValue);
      setSelectedStringified((prevValue) => prevValue);
    }
  }, [props.rowItems, props.selectedRows]);

  const contextValues: AclTableVirtuosoContext = {
    rowItems: sortedRowItems,
    columnItems: props.columnItems || [],
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
        {props.loading === true && (
          <Backdrop open={true} sx={TABLE_BACKDROP_LOADER}>
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default AclTable;
