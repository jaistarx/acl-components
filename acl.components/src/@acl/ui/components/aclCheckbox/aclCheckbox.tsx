import { Checkbox, ThemeProvider } from '@mui/material';
import React from 'react';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import { AclCheckboxProps } from './aclCheckbox.type';

const getExposedProps = (props: AclCheckboxProps) => {
  return {
    ...props,
  };
};

const AclCheckbox = ({ ...props }: AclCheckboxProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Checkbox {...exposedProps} />
      </ThemeProvider>
    </>
  );
};

export default AclCheckbox;
