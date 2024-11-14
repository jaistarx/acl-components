import { RadioGroup, ThemeProvider } from '@mui/material';
import React from 'react';
import { AclThemeProvider } from '../../common';
import { AclRadioGroupProps } from './aclRadioGroup.type';

const getForwardedProps = (props: AclRadioGroupProps) => {
  return {
    ...props,
  };
};

const AclRadioGroup = ({ children, ...props }: AclRadioGroupProps) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <RadioGroup {...forwardedProps}>{children}</RadioGroup>
      </ThemeProvider>
    </>
  );
};

export default AclRadioGroup;
