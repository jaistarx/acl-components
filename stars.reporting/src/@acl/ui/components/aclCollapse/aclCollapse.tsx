import { Collapse, ThemeProvider } from "@mui/material";
import React from "react";
import AclThemeProvider from "../../common/aclThemeProvider/aclThemeProvider";
import { AclCollapseProps } from "../../types/aclCollapseEntity";

const getExposedProps = (props: AclCollapseProps) => {
  return {
    ...props,
    unmountOnExit: props.unmountOnExit ?? true,
  };
};

const AclCollapse = ({ children, ...props }: AclCollapseProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Collapse {...exposedProps}>{children}</Collapse>
      </ThemeProvider>
    </>
  );
};

export default AclCollapse;
