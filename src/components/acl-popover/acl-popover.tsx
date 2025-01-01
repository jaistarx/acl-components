import { Popover, ThemeProvider } from '@mui/material';
import React from 'react';
import { AclThemeProvider } from '../../common';
import { AclPopoverProps } from './acl-popover.type';

const getForwardedProps = (props: AclPopoverProps) => {
  return {
    ...props,
    anchorOrigin: props.anchorOrigin ?? {
      vertical: 'bottom',
      horizontal: 'left',
    },
    transformOrigin: props.transformOrigin ?? {
      vertical: 'top',
      horizontal: 'left',
    },
  };
};

const AclPopover = ({ children, ...props }: AclPopoverProps) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Popover {...forwardedProps}>{children}</Popover>
      </ThemeProvider>
    </>
  );
};

export default AclPopover;
