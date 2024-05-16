import { InputBase, ThemeProvider } from "@mui/material";
import React from "react";
import AclThemeProvider from "../../common/aclThemeProvider/aclThemeProvider";
import { AclInputBaseProps } from "../../types/aclInputBaseEntity";

const getExposedProps = (props: AclInputBaseProps) => {
  return {
    ...props,
  };
};

const AclInputBase = ({ ...props }: AclInputBaseProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <InputBase {...exposedProps}></InputBase>
      </ThemeProvider>
    </>
  );
};

export default AclInputBase;
