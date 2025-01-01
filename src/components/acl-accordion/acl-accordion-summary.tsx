import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AccordionSummary, ThemeProvider } from '@mui/material';
import React from 'react';
import { AclThemeProvider } from '../../common';
import { ACCORDION_SUMMARY_EXPAND_ICON } from './acl-accordion.constant';
import { AclAccordionSummaryProps } from './acl-accordion.type';

const getForwardedProps = (props: AclAccordionSummaryProps) => {
  return {
    ...props,
    expandIcon: props.expandIcon ?? <KeyboardArrowDownIcon sx={ACCORDION_SUMMARY_EXPAND_ICON} />,
  };
};

const AclAccordionSummary = ({ ...props }: AclAccordionSummaryProps) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <AccordionSummary {...forwardedProps}>{props.children}</AccordionSummary>
      </ThemeProvider>
    </>
  );
};

export default AclAccordionSummary;
