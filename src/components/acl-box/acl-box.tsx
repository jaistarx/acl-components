import { Box, ThemeProvider } from '@mui/material';
import React from 'react';
import { AclThemeProvider } from '../../common';
import { AclBoxProps } from './acl-box.type';

const getForwardedProps = (props: AclBoxProps) => {
  return {
    ...props,
  };
};

const AclBox = ({ children, ...props }: AclBoxProps) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Box {...forwardedProps}>{children}</Box>
      </ThemeProvider>
    </>
  );
};

export default AclBox;
