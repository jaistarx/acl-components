import { List, ThemeProvider } from '@mui/material';
import React from 'react';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import { AclListProps } from './aclList.type';

const getExposedProps = (props: AclListProps) => {
  return {
    ...props,
  };
};

const AclList = ({ children, ...props }: AclListProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <ThemeProvider theme={AclThemeProvider}>
      <List {...exposedProps}>{children}</List>
    </ThemeProvider>
  );
};

export default AclList;
