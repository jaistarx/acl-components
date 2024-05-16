import { ModalProps } from "@mui/material";
import { IDictionary } from "./aclCore";

type OmittedModalProps = {
  // Omit the property to override it
  open?: boolean;
  children?: React.ReactNode;
};

export declare type AclModalProps = Omit<
  ModalProps,
  keyof OmittedModalProps
> & {
  openModal: boolean;
  toggleOpenModal?: (event: boolean) => void;
  children?: React.ReactNode;
  modalDisplayStyle?: IDictionary<string | number>;
  closeIconComponent?: React.ReactNode;
  closeIconPosition?: {
    top?: string | number;
    bottom?: string | number;
    right?: string | number;
    left?: string | number;
    transform?: string;
  };
};
