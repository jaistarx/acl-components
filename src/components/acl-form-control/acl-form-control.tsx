import { FormControl, ThemeProvider } from '@mui/material';
import React from 'react';
import { AclThemeProvider } from '../../common';
import { AclFormControlProps } from './acl-form-control.type';

const getForwardedProps = (props: AclFormControlProps) => {
  return {
    ...props,
  };
};

const AclFormControl = ({ children, ...props }: AclFormControlProps) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <FormControl {...forwardedProps}>{children}</FormControl>
      </ThemeProvider>
    </>
  );
};

export default AclFormControl;
