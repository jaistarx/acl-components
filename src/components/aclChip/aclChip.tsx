import { Chip, ThemeProvider } from '@mui/material';
import React from 'react';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import { AclChipProps } from './aclChip.type';

const getForwardedProps = (props: AclChipProps) => {
  const { chipStyle, ...passedProps } = props;

  return {
    ...passedProps,
    variant: props.variant ?? 'filled',
  };
};

const AclChip = ({ ...props }: AclChipProps) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Chip sx={{ ...props.chipStyle }} {...forwardedProps} />
      </ThemeProvider>
    </>
  );
};

export default AclChip;
