import { FormControlLabel, ThemeProvider } from '@mui/material';
import React from 'react';
import { AclThemeProvider } from '../../common';
import { AclFormControlLabelProps } from './aclFormControlLabel.type';

const getForwardedProps = (props: AclFormControlLabelProps) => {
  return {
    ...props,
  };
};

const AclFormControlLabel = ({ ...props }: AclFormControlLabelProps) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <FormControlLabel {...forwardedProps} />
      </ThemeProvider>
    </>
  );
};

export default AclFormControlLabel;
