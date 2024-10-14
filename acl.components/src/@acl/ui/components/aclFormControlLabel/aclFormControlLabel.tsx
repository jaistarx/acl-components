import { FormControlLabel, ThemeProvider } from '@mui/material';
import React from 'react';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import { AclFormControlLabelProps } from './aclFormControlLabel.type';

const getExposedProps = (props: AclFormControlLabelProps) => {
  return {
    ...props,
  };
};

const AclFormControlLabel = ({ ...props }: AclFormControlLabelProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <FormControlLabel {...exposedProps} />
      </ThemeProvider>
    </>
  );
};

export default AclFormControlLabel;
