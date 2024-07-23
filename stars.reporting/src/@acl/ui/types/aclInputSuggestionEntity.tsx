import { InputProps } from "@mui/material";
import { ChangeEvent } from "react";

type OmittedInputSuggestionProps = {
  // Omit the property to override it
  onChange?: ChangeEvent<HTMLInputElement>;
};

export declare type AclInputSuggestionProps = Omit<
  InputProps,
  keyof OmittedInputSuggestionProps
> & {
  options: string[];
  children?: React.ReactNode;
  onChange?: (event: string) => void;
};
