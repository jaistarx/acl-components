import { Popover, ThemeProvider } from "@mui/material";
import React from "react";
import AclThemeProvider from "../../common/aclThemeProvider/aclThemeProvider";
import { AclPopoverProps } from "../../types/aclPopoverEntity";

const getExposedProps = (props: AclPopoverProps) => {
  return {
    ...props,
    anchorOrigin: props.anchorOrigin ?? {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: props.transformOrigin ?? {
      vertical: "top",
      horizontal: "left",
    },
  };
};

const AclPopover = ({ children, ...props }: AclPopoverProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Popover {...exposedProps}>{children}</Popover>
      </ThemeProvider>
    </>
  );
};

export default AclPopover;
