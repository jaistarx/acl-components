import { IconButton, ThemeProvider, styled } from '@mui/material';
import { SnackbarKey, SnackbarProvider, SnackbarProviderProps, useSnackbar } from 'notistack';
import React from 'react';
import { AclThemeProvider } from '../../common';
import Closeicon from '../../common/assets/images/snackbar-close-icon.svg';
import { CLOSE_ICON_STYLE } from './aclSnackbar.constant';
import { AclSnackbarProviderProps } from './aclSnackbar.type';

const StyledSnackbarProvider = styled(SnackbarProvider)<SnackbarProviderProps>(({ theme }) => ({
  '&.notistack-MuiContent': {
    padding: '5px 16px',
    minHeight: '38px',
    borderRadius: '4px',
    fontFamily: '"Manrope", "Helvetica", "Arial", sans-serif',
    fontWeight: 500,
    fontSize: '14px',
  },
  '&.notistack-MuiContent-default': {
    backgroundColor: '#002E33',
  },
  '&.notistack-MuiContent-info': {
    backgroundColor: theme.palette.info.main,
  },
  '&.notistack-MuiContent-error': {
    backgroundColor: theme.palette.error.main,
  },
  '&.notistack-MuiContent-warning': {
    backgroundColor: theme.palette.warning.main,
  },
  '&.notistack-MuiContent-success': {
    backgroundColor: theme.palette.success.main,
  },
}));

const SnackbarCloseIconButton = ({ snackbarKey }: { snackbarKey: SnackbarKey }) => {
  const { closeSnackbar } = useSnackbar();

  return (
    <IconButton id={String(snackbarKey)} onClick={() => closeSnackbar(snackbarKey)}>
      <img id={`close-img-${String(snackbarKey)}`} style={CLOSE_ICON_STYLE} src={Closeicon} alt="close-icon" />
    </IconButton>
  );
};

const getSnackbarProps = (props: AclSnackbarProviderProps) => {
  return {
    maxSnack: props.maxSnack ?? 5,
    anchorOrigin: props.anchorOrigin ?? { vertical: 'top', horizontal: 'center' },
    hideIconVariant: props.hideIconVariant ?? true,
    action: props.action ?? ((snackbarKey: SnackbarKey) => <SnackbarCloseIconButton snackbarKey={snackbarKey} />),
    ...props,
  };
};

const AclSnackbarProvider = ({ children, ...props }: AclSnackbarProviderProps) => {
  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <StyledSnackbarProvider {...getSnackbarProps(props)}>{children}</StyledSnackbarProvider>
      </ThemeProvider>
    </>
  );
};

export default AclSnackbarProvider;
