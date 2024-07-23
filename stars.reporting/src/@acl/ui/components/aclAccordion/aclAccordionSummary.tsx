import { AccordionSummary, ThemeProvider } from "@mui/material";
import React from "react";
import AclThemeProvider from "../../common/aclThemeProvider/aclThemeProvider";
import { IAclAccordionSummaryProps } from "../../types/aclAccordionEntity";

const getExposedProps = (props: IAclAccordionSummaryProps) => {
  return {
    ...props,
  };
};

const AclAccordionSummary = ({ ...props }: IAclAccordionSummaryProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <AccordionSummary {...exposedProps}>{props.children}</AccordionSummary>
      </ThemeProvider>
    </>
  );
};

export default AclAccordionSummary;
