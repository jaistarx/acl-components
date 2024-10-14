import { Link, ThemeProvider } from '@mui/material';
import React from 'react';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import { AclLinkProps } from './aclLink.type';

const getExposedProps = (props: AclLinkProps) => {
  return {
    ...props,
    component: props.component ?? 'button',
    underline: props.underline ?? 'always',
  };
};

const AclLink = ({ children, ...props }: AclLinkProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Link {...exposedProps}>{children}</Link>
      </ThemeProvider>
    </>
  );
};

export default AclLink;
