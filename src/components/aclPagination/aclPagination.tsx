import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Pagination, PaginationItem, ThemeProvider } from '@mui/material';
import React from 'react';
import { AclThemeProvider } from '../../common';
import { AclPaginationProps } from './aclPagination.type';

const getForwardedProps = (props: AclPaginationProps) => {
  return {
    ...props,
  };
};

const AclPagination = ({ ...props }: AclPaginationProps) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Pagination
          renderItem={(item) => (
            <PaginationItem slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item} />
          )}
          {...forwardedProps}
        />
      </ThemeProvider>
    </>
  );
};

export default AclPagination;
