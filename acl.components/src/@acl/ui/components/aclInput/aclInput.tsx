import { ThemeProvider } from '@mui/material/styles';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import React from 'react';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import { AclInputProps } from './aclInput.type';

const getExposedProps = (props: AclInputProps) => {
  return {
    ...props,
    variant: 'outlined' as TextFieldProps['variant'],
  };
};

const AclInput = ({ children, ...props }: AclInputProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <TextField {...exposedProps}>{children}</TextField>
      </ThemeProvider>
    </>
  );
};

export default AclInput;
