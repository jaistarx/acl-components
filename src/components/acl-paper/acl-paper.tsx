import { Paper, ThemeProvider } from '@mui/material';
import React from 'react';
import { AclThemeProvider } from '../../common';
import { AclPaperProps } from './acl-paper.type';

const getForwardedProps = (props: AclPaperProps) => {
  return {
    ...props,
  };
};

const AclPaper = ({ children, ...props }: AclPaperProps) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <ThemeProvider theme={AclThemeProvider}>
      <Paper {...forwardedProps}>{children}</Paper>
    </ThemeProvider>
  );
};

export default AclPaper;
