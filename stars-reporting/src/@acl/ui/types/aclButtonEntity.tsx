import { ButtonProps } from "@mui/material";

export declare type IButtonExposedProps = ButtonProps & {
  variant?: IButtonVariant;
  disabled?: boolean;
  disableElevation?: boolean;
  disableFocusRipple?: boolean;
  disableRipple?: boolean;
  fullWidth?: boolean;
  href?: string;
  icon?: React.ReactNode;
};

export declare type IButtonProps = IButtonExposedProps & {
  children?: React.ReactNode;
  icon?: React.ReactNode;
};

export declare type IButtonVariant = "contained" | "outlined" | "text";
