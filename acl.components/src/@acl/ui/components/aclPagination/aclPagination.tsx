import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Pagination, PaginationItem, ThemeProvider } from '@mui/material';
import React from 'react';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import { AclPaginationProps } from './aclPagination.type';

const getExposedProps = (props: AclPaginationProps) => {
  return {
    ...props,
  };
};

const AclPagination = ({ ...props }: AclPaginationProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Pagination
          renderItem={(item) => (
            <PaginationItem slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item} />
          )}
          {...exposedProps}
        />
      </ThemeProvider>
    </>
  );
};

export default AclPagination;
