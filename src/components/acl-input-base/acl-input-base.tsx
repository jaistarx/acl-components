import { InputBase, ThemeProvider } from '@mui/material';
import React from 'react';
import { AclThemeProvider } from '../../common';
import { AclInputBaseProps } from './acl-input-base.type';

const getForwardedProps = (props: AclInputBaseProps) => {
  return {
    ...props,
  };
};

const AclInputBase = ({ ...props }: AclInputBaseProps) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <InputBase {...forwardedProps}></InputBase>
      </ThemeProvider>
    </>
  );
};

export default AclInputBase;
