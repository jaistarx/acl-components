import { Accordion, ThemeProvider } from '@mui/material';
import React from 'react';
import { AclThemeProvider } from '../../common';
import { AclAccordionProps } from './aclAccordion.type';

const getForwardedProps = (props: AclAccordionProps) => {
  return {
    ...props,
    disableGutters: props.disableGutters ?? true,
  };
};

const AclAccordion = ({ ...props }: AclAccordionProps) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Accordion {...forwardedProps}>{props.children}</Accordion>
      </ThemeProvider>
    </>
  );
};

export default AclAccordion;
