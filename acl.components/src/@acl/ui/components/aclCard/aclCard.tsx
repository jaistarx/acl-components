import { Card, ThemeProvider } from '@mui/material';
import React from 'react';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import { AclCardProps } from './aclCard.type';

const getExposedProps = (props: AclCardProps) => {
  return {
    ...props,
    raised: props.raised ?? false,
  };
};

const AclCard = ({ children, ...props }: AclCardProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Card {...exposedProps}>{children}</Card>
      </ThemeProvider>
    </>
  );
};

export default AclCard;
