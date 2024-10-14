import { Divider, ThemeProvider } from '@mui/material';
import React from 'react';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import { AclDividerProps } from './aclDivider.type';

const getExposedProps = (props: AclDividerProps) => {
  return {
    ...props,
  };
};

const AclDivider = ({ children, ...props }: AclDividerProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Divider {...exposedProps}>{children}</Divider>
      </ThemeProvider>
    </>
  );
};

export default AclDivider;
