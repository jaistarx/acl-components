import { Ref } from "react";
import { IColor, IDictionary } from "./aclCore";
import { InputProps } from "@mui/material";

export declare type IInputExposedProps = InputProps & {
  autoComplete?: string;
  autoFocus?: boolean;
  defaultValue?: any;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  helperText?: React.ReactNode;
  FormHelperTextProps?: IDictionary<unknown>;
  id?: string;
  InputLabelProps?: IDictionary<unknown>;
  inputProps?: IDictionary<unknown>;
  InputProps?: IDictionary<unknown>;
  label?: string;
  maxRows?: number | string;
  minRows?: number | string;
  rows?: number | string;
  multiline?: boolean;
  name?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  value?: any;
  inputRef?: Ref<any>;
  className?: string;
  color?: IColor;
  onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
};

export declare type IInputProps = IInputExposedProps & {
  children?: React.ReactNode;
};
