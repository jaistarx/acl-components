import { Button, ThemeProvider } from '@mui/material';
import React from 'react';
import { AclThemeProvider } from '../../common';
import { AclButtonProps } from './aclButton.type';

const getForwardedProps = (props: AclButtonProps) => {
  return {
    ...props,
    variant: props.variant ?? 'contained',
  };
};

const AclButton = ({ children, ...props }: AclButtonProps) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Button {...forwardedProps}>{children}</Button>
      </ThemeProvider>
    </>
  );
};

export default AclButton;
