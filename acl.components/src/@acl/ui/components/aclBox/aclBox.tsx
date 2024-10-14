import { Box, ThemeProvider } from '@mui/material';
import React from 'react';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import { AclBoxProps } from './aclBox.type';

const getExposedProps = (props: AclBoxProps) => {
  return {
    ...props,
  };
};

const AclBox = ({ children, ...props }: AclBoxProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Box {...exposedProps}>{children}</Box>
      </ThemeProvider>
    </>
  );
};

export default AclBox;
