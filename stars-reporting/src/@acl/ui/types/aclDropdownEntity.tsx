import { JSXElementConstructor } from "react";
import { IColor, IDictionary } from "./aclCore";
import { SelectProps } from "@mui/material";

export declare type IDropdownOptions = {
  id: string | number;
  label: string;
  [key: string]: any;
};

export declare type IDropdownExposedProps = SelectProps & {
  options: IDropdownOptions[];
  onChange: (event: IDictionary<any> | Array<IDictionary<any>>) => void;
  autoWidth?: boolean;
  defaultOpen?: boolean;
  defaultValue?: any;
  displayEmpty?: boolean;
  id?: string;
  input?: React.ReactElement<any, string | JSXElementConstructor<any>>;
  inputProps?: Record<string, any>;
  label?: string;
  labelId?: string;
  MenuProps?: Record<string, any>;
  multiple?: boolean;
  onClose?: (e: any) => void;
  onOpen?: (e: any) => void;
  open?: boolean;
  className?: string;
  style?: IDictionary<string>;
  showCheckbox?: boolean;
  fullWidth?: boolean;
  height?: string | number;
  maxHeight?: string | number;
  width?: string | number;
  maxWidth?: string | number;
  color?: IColor;
  error?: boolean;
  size?: "small" | "medium";
  ref?: React.Ref<unknown>;
  triggerReset?: boolean;
};
