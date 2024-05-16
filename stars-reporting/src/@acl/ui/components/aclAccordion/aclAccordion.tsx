import { Accordion, ThemeProvider } from "@mui/material";
import React from "react";
import AclThemeProvider from "../../common/aclThemeProvider/aclThemeProvider";
import { IAclAccordionProps } from "../../types/aclAccordionEntity";

const getExposedProps = (props: IAclAccordionProps) => {
  return {
    ...props,
  };
};

const AclAccordion = ({ ...props }: IAclAccordionProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Accordion {...exposedProps}>{props.children}</Accordion>
      </ThemeProvider>
    </>
  );
};

export default AclAccordion;
