import { Backdrop, CircularProgress, ThemeProvider } from '@mui/material';
import React from 'react';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import { AclBackdropProps } from './aclBackdrop.type';

const getForwardedProps = (props: AclBackdropProps) => {
  return {
    ...props,
  };
};

const AclBackdrop = ({ ...props }: AclBackdropProps) => {
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

export default AclBackdrop;
