import { ListItem, ThemeProvider } from '@mui/material';
import React from 'react';
import { AclThemeProvider } from '../../common';
import { AclListItemProps } from './acl-list-item.type';

const getForwardedProps = (props: AclListItemProps) => {
  return {
    ...props,
  };
};

const AclListItem = ({ children, ...props }: AclListItemProps) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <ListItem {...forwardedProps}>{children}</ListItem>
      </ThemeProvider>
    </>
  );
};

export default AclListItem;
