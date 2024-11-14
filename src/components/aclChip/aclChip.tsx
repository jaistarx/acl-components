import { Chip, ThemeProvider } from '@mui/material';
import React from 'react';
import { AclThemeProvider } from '../../common';
import { AclChipProps } from './aclChip.type';

const getForwardedProps = (props: AclChipProps) => {
  return {
    ...props,
    sx: {
      fontWeight: 500,
      fontSize: '12px',
      ...props.sx,
    },
    variant: props.variant ?? 'filled',
  };
};

const AclChip = ({ ...props }: AclChipProps) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Chip {...forwardedProps} />
      </ThemeProvider>
    </>
  );
};

export default AclChip;
