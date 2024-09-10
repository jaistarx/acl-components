import { IconButton, Slide, SlideProps, Snackbar, ThemeProvider } from '@mui/material';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import { AclSnackbarMessage, AclSnackbarProps } from '../../types/aclSnackbarEntity';
import CloseIconSnackbar from './icons/close-icon-snackbar.svg';

const SlideTransition = (props: SlideProps) => {
  return <Slide {...props} direction="left" />;
};

const getExposedProps = (props: AclSnackbarProps) => {
  return {
    ...props,
    autoHideDuration: props.autoHideDuration ?? 5000,
    anchorOrigin: props.anchorOrigin ?? {
      vertical: 'bottom',
      horizontal: 'right',
    },
    TransitionComponent: props.TransitionComponent ?? SlideTransition,
  };
};

const AclSnackbar = ({ children, ...props }: AclSnackbarProps) => {
  const exposedProps = getExposedProps(props);
  const [snackPack, setSnackPack] = useState<readonly AclSnackbarMessage[]>([]);
  const [open, setOpen] = useState(false);
  const [messageInfo, setMessageInfo] = useState<AclSnackbarMessage | undefined>(undefined);

  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  const action = (
    <>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <img src={CloseIconSnackbar} alt="close-icon" />
      </IconButton>
    </>
  );

  useEffect(() => {
    if (snackPack.length && !messageInfo) {
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  useEffect(() => {
    if (Boolean(exposedProps?.message)) {
      setSnackPack((prev) => [...prev, { message: exposedProps?.message, key: new Date().getTime() }]);
    } else {
      handleClose();
    }
  }, [exposedProps?.message]);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Snackbar
          {...exposedProps}
          key={messageInfo ? messageInfo.key : undefined}
          open={open}
          onClose={handleClose}
          TransitionProps={{ onExited: handleExited }}
          message={messageInfo ? messageInfo.message : undefined}
          action={action}
        >
          {children}
        </Snackbar>
      </ThemeProvider>
    </>
  );
};

export default AclSnackbar;
