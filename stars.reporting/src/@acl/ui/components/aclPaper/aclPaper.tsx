import { Paper, ThemeProvider } from '@mui/material';
import React from 'react';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import { AclPaperProps } from '../../types/aclPaperEntity';

const getExposedProps = (props: AclPaperProps) => {
  return {
    ...props,
  };
};

const AclPaper = ({ children, ...props }: AclPaperProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <ThemeProvider theme={AclThemeProvider}>
      <Paper {...exposedProps}>{children}</Paper>
    </ThemeProvider>
  );
};

export default AclPaper;
