import { Backdrop, Box, Fade, Modal, ThemeProvider } from '@mui/material';
import React from 'react';
import { AclThemeProvider } from '../../common';
import { DEFAULT_BOX_STYLE } from './aclModal.constant';
import { AclModalProps } from './aclModal.type';

const seperatePropsToBePassed = (props: AclModalProps) => {
  const { modalDisplayStyle, ...originalProps } = props;
  return originalProps;
};

const getForwardedProps = (props: AclModalProps) => {
  const originalProps = seperatePropsToBePassed(props);
  return {
    ...originalProps,
    open: props.open ?? false,
    disableAutoFocus: props.disableAutoFocus ?? true,
  };
};

const AclModal = ({ ...props }: AclModalProps) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Modal
          aria-labelledby="acl-transition-modal-title"
          aria-describedby="acl-transition-modal-description"
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
          {...forwardedProps}
        >
          <Fade in={props.open}>
            <Box sx={{ ...DEFAULT_BOX_STYLE, ...props.modalDisplayStyle }}>{props.children}</Box>
          </Fade>
        </Modal>
      </ThemeProvider>
    </>
  );
};

export default AclModal;
