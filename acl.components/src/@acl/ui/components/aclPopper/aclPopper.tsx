import { Box, Fade, Popper, ThemeProvider } from '@mui/material';
import React from 'react';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import { AclPopperProps } from './aclPopper.type';

const getExposedProps = (props: AclPopperProps) => {
  return {
    ...props,
    disablePortal: props.disablePortal ?? true,
    transition: props.transition ?? true,
  };
};

const AclPopper = ({ children, ...props }: AclPopperProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        {exposedProps.transition ? (
          <Popper {...exposedProps}>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Box>
                  <>{children}</>
                </Box>
              </Fade>
            )}
          </Popper>
        ) : (
          <Popper {...exposedProps}>
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
