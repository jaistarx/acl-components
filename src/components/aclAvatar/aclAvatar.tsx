import { Avatar, ThemeProvider } from '@mui/material';
import React from 'react';
import { AclThemeProvider } from '../../common';
import { AclAvatarProps } from './aclAvatar.type';

const getForwardedProps = (props: AclAvatarProps) => {
  return {
    ...props,
  };
};

const AclAvatar = ({ children, ...props }: AclAvatarProps) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Avatar {...forwardedProps}>{children}</Avatar>
      </ThemeProvider>
    </>
  );
};

export default AclAvatar;
