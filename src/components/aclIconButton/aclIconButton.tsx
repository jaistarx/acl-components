import { IconButton, ThemeProvider } from '@mui/material';
import React from 'react';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import { AclIconButtonProps } from './aclIconButton.type';

const getForwardedProps = (props: AclIconButtonProps) => {
  return {
    ...props,
  };
};

const AclIconButton = ({ children, ...props }: AclIconButtonProps) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <IconButton {...forwardedProps}>{children}</IconButton>
      </ThemeProvider>
    </>
  );
};

export default AclIconButton;
