import { Backdrop, CircularProgress, ThemeProvider } from '@mui/material';
import React from 'react';
import { AclThemeProvider } from '../../common';
import { AclBackdropLoaderProps } from './acl-backdrop-loader.type';

const getForwardedProps = (props: AclBackdropLoaderProps) => {
  return {
    ...props,
  };
};

const AclBackdropLoader = ({ ...props }: AclBackdropLoaderProps) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Backdrop {...forwardedProps}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </ThemeProvider>
    </>
  );
};

export default AclBackdropLoader;
