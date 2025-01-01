import { Box, Fade, Popper, ThemeProvider } from '@mui/material';
import React from 'react';
import { AclThemeProvider } from '../../common';
import { AclPopperProps } from './acl-popper.type';

const getForwardedProps = (props: AclPopperProps) => {
  return {
    ...props,
    disablePortal: props.disablePortal ?? true,
    transition: props.transition ?? true,
  };
};

const AclPopper = ({ children, ...props }: AclPopperProps) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        {forwardedProps.transition ? (
          <Popper {...forwardedProps}>
            {(popperChildrenProps) => (
              <Fade {...popperChildrenProps.TransitionProps} timeout={350}>
                <Box>
                  <>{typeof children === 'function' ? children(popperChildrenProps) : children}</>
                </Box>
              </Fade>
            )}
          </Popper>
        ) : (
          <Popper {...forwardedProps}>
            <Box>
              <>{children as React.ReactNode}</>
            </Box>
          </Popper>
        )}
      </ThemeProvider>
    </>
  );
};

export default AclPopper;
