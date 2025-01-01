import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { AclThemeProvider } from '../../common';
import { AclCssBaselineProps } from './acl-css-baseline.type';

const getForwardedProps = (props: AclCssBaselineProps) => {
  return {
    ...props,
  };
};

const AclCssBaseline = ({ children, ...props }: AclCssBaselineProps) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <CssBaseline {...forwardedProps}>{children}</CssBaseline>
      </ThemeProvider>
    </>
  );
};

export default AclCssBaseline;
