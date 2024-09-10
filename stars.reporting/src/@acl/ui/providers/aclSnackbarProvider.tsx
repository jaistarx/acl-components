import { IconButton } from '@mui/material';
import { SnackbarKey, SnackbarProvider, SnackbarProviderProps, useSnackbar } from 'notistack';
import React from 'react';
import Closeicon from '../common/images/snackbar-close-icon.svg';

const SnackbarCloseIconButton = ({ snackbarKey }: { snackbarKey: SnackbarKey }) => {
  const { closeSnackbar } = useSnackbar();

  return (
    <IconButton size="small" id={String(snackbarKey)} onClick={() => closeSnackbar(snackbarKey)}>
      <img style={{ height: '16px', width: '16px' }} src={Closeicon} alt="close-icon" />
    </IconButton>
  );
};

const getSnackbarProps: SnackbarProviderProps = {
  maxSnack: 5,
  anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
  action: (snackbarKey) => <SnackbarCloseIconButton snackbarKey={snackbarKey}></SnackbarCloseIconButton>,
};

const AclSnackbarProvider = ({ children }: { children: React.ReactNode }) => {
  return <SnackbarProvider {...getSnackbarProps}>{children}</SnackbarProvider>;
};

export default AclSnackbarProvider;
