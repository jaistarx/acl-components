import { Box, Fade, Popper, ThemeProvider } from '@mui/material';
import React from 'react';
import { AclThemeProvider } from '../../common';
import { AclPopperProps } from './aclPopper.type';

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
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Box>
                  <>{children}</>
                </Box>
              </Fade>
            )}
          </Popper>
        ) : (
          <Popper {...forwardedProps}>
            <Box>
              <>{children}</>
            </Box>
          </Popper>
        )}
      </ThemeProvider>
    </>
  );
};

export default AclPopper;
