import { Backdrop, Box, Fade, Modal, ThemeProvider } from '@mui/material';
import React from 'react';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import { DEFAULT_BOX_STYLE, DEFAULT_CLOSE_BUTTON_STYLE } from './aclModal.constant';
import { AclModalProps } from './aclModal.type';
import ModalCloseIcon from './icons/modal-close-icon.svg';

const seperatePropsToBePassed = (props: AclModalProps) => {
  const { openModal, toggleOpenModal, modalDisplayStyle, closeIconPosition, closeIconComponent, ...originalProps } =
    props;
  return originalProps;
};

const getExposedProps = (props: AclModalProps) => {
  const originalProps = seperatePropsToBePassed(props);
  return {
    ...originalProps,
    open: props.openModal ?? false,
    disableAutoFocus: props.disableAutoFocus ?? true,
  };
};

const AclModal = ({ ...props }: AclModalProps) => {
  const exposedProps = getExposedProps(props);

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
          {...exposedProps}
        >
          <Fade in={props.openModal}>
            <Box sx={{ ...DEFAULT_BOX_STYLE, ...props.modalDisplayStyle }}>
              <Box
                sx={{
                  ...DEFAULT_CLOSE_BUTTON_STYLE,
                  ...props.closeIconPosition,
                }}
              >
                {props.closeIconComponent ?? (
                  <img
                    src={ModalCloseIcon}
                    alt="modal-close-icon"
                    onClick={() => props.toggleOpenModal && props.toggleOpenModal(false)}
                  />
                )}
              </Box>
              <>{props.children}</>
            </Box>
          </Fade>
        </Modal>
      </ThemeProvider>
    </>
  );
};

export default AclModal;
