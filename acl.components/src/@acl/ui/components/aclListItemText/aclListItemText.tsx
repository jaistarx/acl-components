import { ListItemText, ThemeProvider } from '@mui/material';
import React from 'react';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import { AclListItemTextProps } from './aclListItemText.type';

const getExposedProps = (props: AclListItemTextProps) => {
  return {
    ...props,
  };
};

const AclListItemText = ({ children, ...props }: AclListItemTextProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <ThemeProvider theme={AclThemeProvider}>
      <ListItemText {...exposedProps}>{children}</ListItemText>
    </ThemeProvider>
  );
};

export default AclListItemText;
