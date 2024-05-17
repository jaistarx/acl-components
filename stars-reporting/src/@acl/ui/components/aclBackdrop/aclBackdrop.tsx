import { Backdrop, CircularProgress, ThemeProvider } from "@mui/material";
import React from "react";
import AclThemeProvider from "../../common/aclThemeProvider/aclThemeProvider";
import { BACKDROP_STYLES } from "../../constants/aclBackdropConstant";
import { AclBackdropProps } from "../../types/aclBackdropEntity";

const getExposedProps = (props: AclBackdropProps) => {
  return {
    ...props,
  };
};

const AclBackdrop = ({ ...props }: AclBackdropProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Backdrop {...exposedProps} sx={BACKDROP_STYLES}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </ThemeProvider>
    </>
  );
};

export default AclBackdrop;
