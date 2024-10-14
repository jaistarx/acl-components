import { FormControl, ThemeProvider } from '@mui/material';
import React from 'react';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import { AclFormControlProps } from './aclFormControl.type';

const getExposedProps = (props: AclFormControlProps) => {
  return {
    ...props,
  };
};

const AclFormControl = ({ children, ...props }: AclFormControlProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <FormControl {...exposedProps}>{children}</FormControl>
      </ThemeProvider>
    </>
  );
};

export default AclFormControl;
