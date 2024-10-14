import { IconButton, ThemeProvider } from '@mui/material';
import React from 'react';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import { AclIconButtonProps } from './aclIconButton.type';

const getExposedProps = (props: AclIconButtonProps) => {
  return {
    ...props,
  };
};

const AclIconButton = ({ children, ...props }: AclIconButtonProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <IconButton {...exposedProps}>{children}</IconButton>
      </ThemeProvider>
    </>
  );
};

export default AclIconButton;
