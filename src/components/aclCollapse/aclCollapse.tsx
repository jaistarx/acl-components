import { Collapse, ThemeProvider } from '@mui/material';
import React from 'react';
import { AclThemeProvider } from '../../common';
import { AclCollapseProps } from './aclCollapse.type';

const getForwardedProps = (props: AclCollapseProps) => {
  return {
    ...props,
    unmountOnExit: props.unmountOnExit ?? true,
  };
};

const AclCollapse = ({ children, ...props }: AclCollapseProps) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Collapse {...forwardedProps}>{children}</Collapse>
      </ThemeProvider>
    </>
  );
};

export default AclCollapse;
