import { SnackbarProps } from '@mui/material';

export declare type AclSnackbarProps = SnackbarProps & {
  setOpen?: (event: boolean) => void;
};

export declare type AclSnackbarMessage = {
  message: any;
  key: number;
};
