import { ListItemButton, ThemeProvider } from "@mui/material";
import React from "react";
import AclThemeProvider from "../../common/aclThemeProvider/aclThemeProvider";
import { AclListItemButtonProps } from "../../types/aclListItemButtonEntity";

const getExposedProps = (props: AclListItemButtonProps) => {
  return {
    ...props,
  };
};

const AclListItemButton = ({ children, ...props }: AclListItemButtonProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <ListItemButton {...exposedProps}>{children}</ListItemButton>
      </ThemeProvider>
    </>
  );
};

export default AclListItemButton;
