import { Link, ThemeProvider } from '@mui/material';
import React from 'react';
import { AclThemeProvider } from '../../common';
import { AclLinkProps } from './aclLink.type';

const getForwardedProps = (props: AclLinkProps) => {
  return {
    ...props,
    component: props.component ?? 'button',
    underline: props.underline ?? 'always',
  };
};

const AclLink = ({ children, ...props }: AclLinkProps) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Link {...forwardedProps}>{children}</Link>
      </ThemeProvider>
    </>
  );
};

export default AclLink;
