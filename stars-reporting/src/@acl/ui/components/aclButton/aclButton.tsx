import { Button, ThemeProvider } from "@mui/material";
import React from "react";
import AclThemeProvider from "../../common/aclThemeProvider/aclThemeProvider";
import {
  IButtonExposedProps,
  IButtonProps,
  IButtonVariant
} from "../../types/aclButtonEntity";
import { IDictionary } from "../../types/aclCore";

const getExposedProps = (props: IButtonExposedProps): IDictionary<any> => {
  return {
    ...props,
    variant: (props.variant ?? "contained") as IButtonVariant,
    disabled: props.disabled ?? false,
    disableElevation: props.disableElevation ?? false,
    disableFocusRipple: props.disableFocusRipple ?? false,
    disableRipple: props.disableRipple ?? false,
    fullWidth: props.fullWidth ?? false,
    href: props.href ?? undefined,
  };
};

const AclButton = ({ children, ...props }: IButtonProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Button {...exposedProps}>{children}</Button>
      </ThemeProvider>
    </>
  );
};

export default AclButton;
