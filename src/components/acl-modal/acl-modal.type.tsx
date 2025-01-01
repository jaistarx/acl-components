import { ModalProps } from '@mui/material';
import { IDictionary } from '../../common/types';

type OmittedModalProps = {
  // Omit the property to override it
  children?: React.ReactNode;
};

export declare type AclModalProps = Omit<ModalProps, keyof OmittedModalProps> & {
  children?: React.ReactNode;
  modalDisplayStyle?: IDictionary<string | number>;
};
