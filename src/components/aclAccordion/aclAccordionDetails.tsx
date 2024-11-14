import { AccordionDetails, ThemeProvider } from '@mui/material';
import React from 'react';
import { AclThemeProvider } from '../../common';
import { AclAccordionDetailsProps } from './aclAccordion.type';

const getForwardedProps = (props: AclAccordionDetailsProps) => {
  return {
    ...props,
  };
};

const AclAccordionDetails = ({ ...props }: AclAccordionDetailsProps) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <AccordionDetails {...forwardedProps}>{props.children}</AccordionDetails>
      </ThemeProvider>
    </>
  );
};

export default AclAccordionDetails;
