import { Radio, ThemeProvider } from '@mui/material';
import React from 'react';
import { AclThemeProvider } from '../../common';
import { AclRadioProps } from './acl-radio.type';

const getForwardedProps = (props: AclRadioProps) => {
  return {
    ...props,
  };
};

const AclRadio = ({ ...props }: AclRadioProps) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Radio {...forwardedProps} />
      </ThemeProvider>
    </>
  );
};

export default AclRadio;
