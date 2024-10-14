import { Radio, ThemeProvider } from '@mui/material';
import React from 'react';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import { AclRadioProps } from './aclRadio.type';

const getExposedProps = (props: AclRadioProps) => {
  return {
    ...props,
  };
};

const AclRadio = ({ ...props }: AclRadioProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Radio {...exposedProps} />
      </ThemeProvider>
    </>
  );
};

export default AclRadio;
