import { Divider, ThemeProvider } from "@mui/material";
import React from "react";
import AclThemeProvider from "../../common/aclThemeProvider/aclThemeProvider";
import { IAclDividerProps } from "../../types/aclDividerEntity";

const getExposedProps = (props: IAclDividerProps) => {
  return {
    ...props,
  };
};

const AclDivider = ({ children, ...props }: IAclDividerProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Divider {...exposedProps}>{children}</Divider>
      </ThemeProvider>
    </>
  );
};

export default AclDivider;
