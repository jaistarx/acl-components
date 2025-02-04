import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  Box,
  ListItemText,
  MenuItem,
  Pagination,
  PaginationItem,
  Select,
  SelectChangeEvent,
  ThemeProvider,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AclThemeProvider } from '../../common';
import { OUTER_CONTAINER } from './acl-table-pagination.constant';
import { AclTablePaginationProps } from './acl-table-pagination.type';

const getForwardedProps = (props: AclTablePaginationProps) => {
  const {
    onChangeRowsPerPage,
    defaultRowsPerPage,
    rowsPerPage,
    rowsPerPageValue,
    onChangePage,
    totalNumberOfRows,
    ...forwardedProps
  } = props;

  return {
    ...forwardedProps,
  };
};

const AclTablePagination = ({ children, ...props }: AclTablePaginationProps) => {
  const forwardedProps = getForwardedProps(props);
  const [rowsPerPageValue, setRowsPerPageValue] = useState<number | ''>(
    props.defaultRowsPerPage ?? props.rowsPerPage?.[0] ?? '',
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
    if (props.rowsPerPageValue) {
      setRowsPerPageValue(props.rowsPerPageValue);
    }
  }, [props.rowsPerPageValue]);

  return (
    <ThemeProvider theme={AclThemeProvider}>
      <Box component="div" sx={OUTER_CONTAINER}>
        <Select size="small" value={rowsPerPageValue} onChange={handleRowsPerPageChange}>
          {props.rowsPerPage?.map((rowPerPage: number, index: number) => (
            <MenuItem key={index} value={rowPerPage}>
              <ListItemText primary={rowPerPage} />
            </MenuItem>
          ))}
        </Select>
        <Pagination
          count={
            props.totalNumberOfRows && rowsPerPageValue
              ? Math.ceil(props.totalNumberOfRows / rowsPerPageValue)
              : props.count
          }
          renderItem={(item) => (
            <PaginationItem slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item} />
          )}
          {...forwardedProps}
          onChange={handlePageChange}
        />
      </Box>
    </ThemeProvider>
  );
};

export default AclTablePagination;
