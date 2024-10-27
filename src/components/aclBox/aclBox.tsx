import { Box, ThemeProvider } from '@mui/material';
import React from 'react';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import { AclBoxProps } from './aclBox.type';

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
