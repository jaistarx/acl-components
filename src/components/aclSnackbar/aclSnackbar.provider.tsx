import { IconButton } from '@mui/material';
import { SnackbarKey, SnackbarProvider, useSnackbar } from 'notistack';
import React from 'react';
import Closeicon from '../../common/assets/images/snackbar-close-icon.svg';
import { CLOSE_ICON_STYLE, SNACKBAR_CONTAINER_STYLE } from './aclSnackbar.constant';
import { AclSnackbarProviderProps } from './aclSnackbar.type';

const SnackbarCloseIconButton = ({ snackbarKey }: { snackbarKey: SnackbarKey }) => {
  const { closeSnackbar } = useSnackbar();

  return (
    <IconButton id={String(snackbarKey)} onClick={() => closeSnackbar(snackbarKey)}>
      <img style={CLOSE_ICON_STYLE} src={Closeicon} alt="close-icon" />
    </IconButton>
  );
};

const getSnackbarProps = (props: AclSnackbarProviderProps) => {
  return {
    maxSnack: props.maxSnack ?? 5,
    anchorOrigin: props.anchorOrigin ?? { vertical: 'top', horizontal: 'center' },
    hideIconVariant: props.hideIconVariant ?? true,
    style: props.style ?? SNACKBAR_CONTAINER_STYLE,
    action:
      props.action ??
      ((snackbarKey: SnackbarKey) => <SnackbarCloseIconButton snackbarKey={snackbarKey}></SnackbarCloseIconButton>),
    ...props,
  };
};

const AclSnackbarProvider = ({ children, ...props }: AclSnackbarProviderProps) => {
  return <SnackbarProvider {...getSnackbarProps(props)}>{children}</SnackbarProvider>;
};

export default AclSnackbarProvider;
