import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  ListItemText,
  MenuItem,
  Pagination,
  PaginationItem,
  Select,
  SelectChangeEvent,
  ThemeProvider,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import { OUTER_CONTAINER } from './aclTablePagination.constant';
import { AclTablePaginationProps } from './aclTablePagination.type';

const getPassedProps = (props: AclTablePaginationProps) => {
  const { onChangeRowsPerPage, defaultRowsPerPage, rowsPerPage, onChangePage, totalNumberOfRows, ...passedProps } =
    props;

  return {
    ...passedProps,
  };
};

const AclTable = ({ children, ...props }: AclTablePaginationProps) => {
  const passedProps = getPassedProps(props);
  const [rowsPerPageValue, setRowsPerPageValue] = useState<number>(
    props.defaultRowsPerPage ?? props.rowsPerPage?.[0] ?? 1,
  );

  // NOTE: Reference logic for paginatedRowItems
  // const paginatedRowItems = rows.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)

  const handleRowsPerPageChange = (event: SelectChangeEvent<number>, _child: React.ReactNode): void => {
    const {
      target: { value },
    } = event;

    if (!value) return;
    setRowsPerPageValue(Number(value));

    if (props.onChangeRowsPerPage) props.onChangeRowsPerPage(Number(value));
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    props.onChangePage?.(value);
    props.onChange?.(event, value);
  };

  useEffect(() => {
    setRowsPerPageValue(props.defaultRowsPerPage ?? props.rowsPerPage?.[0] ?? 1);
  }, [props.defaultRowsPerPage, props.rowsPerPage]);

  return (
    <ThemeProvider theme={AclThemeProvider}>
      <div style={OUTER_CONTAINER}>
        <Select size="small" value={rowsPerPageValue} onChange={handleRowsPerPageChange}>
          {props.rowsPerPage?.map((rowPerPage: number, index: number) => (
            <MenuItem key={index} value={rowPerPage}>
              <ListItemText primary={rowPerPage} />
            </MenuItem>
          ))}
        </Select>
        <Pagination
          count={props.totalNumberOfRows ? Math.ceil(props.totalNumberOfRows / rowsPerPageValue) : undefined}
          renderItem={(item) => (
            <PaginationItem slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item} />
          )}
          {...passedProps}
          onChange={handlePageChange}
        />
      </div>
    </ThemeProvider>
  );
};

export default AclTable;
