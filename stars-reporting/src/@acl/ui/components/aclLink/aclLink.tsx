import { Link, ThemeProvider } from "@mui/material";
import React from "react";
import AclThemeProvider from "../../common/aclThemeProvider/aclThemeProvider";
import { IDictionary } from "../../types/aclCore";
import { AclLinkProps } from "../../types/aclLinkEntity";

const getExposedProps = (props: AclLinkProps): IDictionary<any> => {
  return {
    ...props,
    component: props.component ?? "button",
    disabled: props.disabled ?? false,
    underline: props.underline ?? "always",
  };
};

const AclLink = ({ children, ...props }: AclLinkProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Link {...exposedProps}>{children}</Link>
      </ThemeProvider>
    </>
  );
};

export default AclLink;
