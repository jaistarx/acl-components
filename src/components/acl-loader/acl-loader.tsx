import { CircularProgress, ThemeProvider } from '@mui/material';
import React from 'react';
import { AclThemeProvider } from '../../common';
import { AclLoaderProps } from './acl-loader.type';

const getForwardedProps = (props: AclLoaderProps) => {
  const { children, open, ...forwardedProps } = props;

  return {
    ...forwardedProps,
  };
};

const AclCircularProgress = ({ ...props }: AclLoaderProps) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <>
      {props.open ? (
        <ThemeProvider theme={AclThemeProvider}>
          <CircularProgress {...forwardedProps} />
        </ThemeProvider>
      ) : (
        <></>
      )}
    </>
  );
};

export default AclCircularProgress;
