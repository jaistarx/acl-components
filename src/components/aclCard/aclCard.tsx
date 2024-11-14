import { Card, ThemeProvider } from '@mui/material';
import React from 'react';
import { AclThemeProvider } from '../../common';
import { AclCardProps } from './aclCard.type';

const getForwardedProps = (props: AclCardProps) => {
  return {
    ...props,
    raised: props.raised ?? false,
  };
};

const AclCard = ({ children, ...props }: AclCardProps) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Card {...forwardedProps}>{children}</Card>
      </ThemeProvider>
    </>
  );
};

export default AclCard;
