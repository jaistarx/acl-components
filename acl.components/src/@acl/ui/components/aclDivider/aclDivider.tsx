import { Divider, ThemeProvider } from '@mui/material';
import React from 'react';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import { AclDividerProps } from './aclDivider.type';

const getForwardedProps = (props: AclDividerProps) => {
  return {
    ...props,
  };
};

const AclDivider = ({ children, ...props }: AclDividerProps) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Divider {...forwardedProps}>{children}</Divider>
      </ThemeProvider>
    </>
  );
};

export default AclDivider;
