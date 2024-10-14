import { Chip, ThemeProvider } from '@mui/material';
import React from 'react';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import { AclChipProps } from './aclChip.type';

const getExposedProps = (props: AclChipProps) => {
  const { chipStyle, ...passedProps } = props;

  return {
    ...passedProps,
    variant: props.variant ?? 'filled',
  };
};

const AclChip = ({ ...props }: AclChipProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Chip sx={{ ...props.chipStyle }} {...exposedProps} />
      </ThemeProvider>
    </>
  );
};

export default AclChip;
