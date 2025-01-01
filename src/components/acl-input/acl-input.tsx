import TextField, { TextFieldProps } from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { AclThemeProvider } from '../../common';
import { AclInputProps } from './acl-input.type';

const getForwardedProps = (props: AclInputProps) => {
  return {
    ...props,
    variant: 'outlined' as TextFieldProps['variant'],
    fullWidth: props.fullWidth ?? true,
  };
};

const AclInput = ({ children, ...props }: AclInputProps) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <TextField {...forwardedProps}>{children}</TextField>
      </ThemeProvider>
    </>
  );
};

export default AclInput;
