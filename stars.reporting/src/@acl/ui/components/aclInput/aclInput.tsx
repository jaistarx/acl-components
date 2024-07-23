import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import { INPUTLABEL_CSS_CONFIG } from '../../constants/aclInputConstant';
import { AclInputProps } from '../../types/aclInputEntity';

const getExposedProps = (props: AclInputProps) => {
  return {
    ...props,
    InputLabelProps: props.InputLabelProps ?? { style: INPUTLABEL_CSS_CONFIG },
    variant: props.variant ?? 'standard',
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
