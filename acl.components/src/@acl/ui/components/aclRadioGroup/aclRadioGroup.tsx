import { RadioGroup, ThemeProvider } from '@mui/material';
import React from 'react';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import { AclRadioGroupProps } from './aclRadioGroup.type';

const getExposedProps = (props: AclRadioGroupProps) => {
  return {
    ...props,
  };
};

const AclRadioGroup = ({ children, ...props }: AclRadioGroupProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <RadioGroup {...exposedProps}>{children}</RadioGroup>
      </ThemeProvider>
    </>
  );
};

export default AclRadioGroup;
