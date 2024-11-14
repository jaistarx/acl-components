import { ListItemButton, ThemeProvider } from '@mui/material';
import React from 'react';
import { AclThemeProvider } from '../../common';
import { AclListItemButtonProps } from './aclListItemButton.type';

const getForwardedProps = (props: AclListItemButtonProps) => {
  return {
    ...props,
  };
};

const AclListItemButton = ({ children, ...props }: AclListItemButtonProps) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <ListItemButton {...forwardedProps}>{children}</ListItemButton>
      </ThemeProvider>
    </>
  );
};

export default AclListItemButton;
