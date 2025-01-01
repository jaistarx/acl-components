import { List, ThemeProvider } from '@mui/material';
import React from 'react';
import { AclThemeProvider } from '../../common';
import { AclListProps } from './acl-list.type';

const getForwardedProps = (props: AclListProps) => {
  return {
    ...props,
  };
};

const AclList = ({ children, ...props }: AclListProps) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <ThemeProvider theme={AclThemeProvider}>
      <List {...forwardedProps}>{children}</List>
    </ThemeProvider>
  );
};

export default AclList;
