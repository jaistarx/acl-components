import { Avatar, ThemeProvider } from '@mui/material';
import React from 'react';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import { AclAvatarProps } from './aclAvatar.type';

const getExposedProps = (props: AclAvatarProps) => {
  return {
    ...props,
  };
};

const AclAvatar = ({ children, ...props }: AclAvatarProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Avatar {...exposedProps}>{children}</Avatar>
      </ThemeProvider>
    </>
  );
};

export default AclAvatar;
