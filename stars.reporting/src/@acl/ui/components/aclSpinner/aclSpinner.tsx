import { CircularProgress, ThemeProvider } from "@mui/material";
import React from "react";
import AclThemeProvider from "../../common/aclThemeProvider/aclThemeProvider";
import { AclSpinnerProps } from "../../types/aclSpinnerEntity";
import { SPINNER_WRAPPER } from "../../constants/aclSpinnerConstant";

const getExposedProps = (props: AclSpinnerProps) => {
  return {
    ...props,
  };
};

const AclSpinner = ({ ...props }: AclSpinnerProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <div style={SPINNER_WRAPPER}>
          <CircularProgress {...exposedProps} />
        </div>
      </ThemeProvider>
    </>
  );
};

export default AclSpinner;
