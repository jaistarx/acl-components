import { Button, ThemeProvider } from '@mui/material';
import React from 'react';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import { AclButtonProps } from '../../types/aclButtonEntity';

const getExposedProps = (props: AclButtonProps) => {
  return {
    ...props,
    variant: props.variant ?? 'contained',
  };
};

const AclButton = ({ children, ...props }: AclButtonProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Button {...exposedProps}>{children}</Button>
      </ThemeProvider>
    </>
  );
};

export default AclButton;
