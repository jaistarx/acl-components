import { Box, ThemeProvider } from "@mui/material";
import React from "react";
import AclThemeProvider from "../../common/aclThemeProvider/aclThemeProvider";
import { IAclBoxProps } from "../../types/aclBoxEntity";

const getExposedProps = (props: IAclBoxProps) => {
  return {
    ...props,
  };
};

const AclBox = ({ children, ...props }: IAclBoxProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Box {...exposedProps}>{children}</Box>
      </ThemeProvider>
    </>
  );
};

export default AclBox;
