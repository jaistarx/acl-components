import { ListItemText, ThemeProvider } from '@mui/material';
import React from 'react';
import { AclThemeProvider } from '../../common';
import { AclListItemTextProps } from './aclListItemText.type';

const getForwardedProps = (props: AclListItemTextProps) => {
  return {
    ...props,
  };
};

const AclListItemText = ({ children, ...props }: AclListItemTextProps) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <ThemeProvider theme={AclThemeProvider}>
      <ListItemText {...forwardedProps}>{children}</ListItemText>
    </ThemeProvider>
  );
};

export default AclListItemText;
