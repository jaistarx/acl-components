import { ToggleButtonGroupProps } from "@mui/material";

type OmittedToggleButtonProps = {
  // Omit the property to override it
  defaultValue?: any;
};

export declare type IToggleButtonOptions = {
  id: string | number;
  label: string;
  [key: string]: any;
};

export declare type IToggleButtonProps = Omit<
  ToggleButtonGroupProps,
  keyof OmittedToggleButtonProps
> & {
  options?: IToggleButtonOptions[];
  onChange?: (event: any) => void;
  defaultValue?: IToggleButtonOptions;
};
