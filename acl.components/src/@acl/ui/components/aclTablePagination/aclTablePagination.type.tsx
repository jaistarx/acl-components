import { PaginationProps } from '@mui/material';
import React from 'react';

export declare type AclTablePaginationProps = PaginationProps & {
  children?: React.ReactNode;
  rowsPerPage?: number[];
  defaultRowsPerPage?: number;
  totalNumberOfRows?: number;
  onChangeRowsPerPage?: (event: number) => void;
  onChangePage?: (event: number) => void;
};
