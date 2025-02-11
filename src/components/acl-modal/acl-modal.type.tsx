import { ModalProps } from '@mui/material';
import { IDictionary } from '../../common';

type OmittedModalProps = {
  children?: React.ReactNode;
};

export declare type AclModalProps = Omit<ModalProps, keyof OmittedModalProps> & {
  children?: React.ReactNode;
  modalDisplayStyle?: IDictionary<string | number>;
};
