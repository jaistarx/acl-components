import { InputBaseProps } from "@mui/material";
import { ChangeEvent } from "react";

type OmittedInputBaseProps = {
  // Omit the property to override it
  onChange?: ChangeEvent<HTMLInputElement>;
};

export declare type AclInputSearchProps = Omit<
  InputBaseProps,
  keyof OmittedInputBaseProps
> & {
  onChange?: (event: string) => void;
};
