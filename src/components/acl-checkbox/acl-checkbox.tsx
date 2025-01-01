import { Checkbox, ThemeProvider } from '@mui/material';
import React from 'react';
import { AclThemeProvider } from '../../common';
import { AclCheckboxProps } from './acl-checkbox.type';

const getForwardedProps = (props: AclCheckboxProps) => {
  return {
    ...props,
  };
};

const AclCheckbox = ({ ...props }: AclCheckboxProps) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Checkbox {...forwardedProps} />
      </ThemeProvider>
    </>
  );
};

export default AclCheckbox;
