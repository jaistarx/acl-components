import { IconButton, IconButtonProps, ThemeProvider } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import React from 'react';
import { AclThemeProvider, CalendarIcon, CancelIcon } from '../../common';
import { DEMO_CONTAINER } from './acl-datepicker.constant';
import { AclDatePickerProps } from './acl-datepicker.type';

const SmallIconButton = (props: IconButtonProps) => <IconButton {...props} size="small" />;

const getForwardedProps = (props: AclDatePickerProps) => {
  const { slotProps, fullWidth, ...forwardedProps } = props;

  return {
    ...forwardedProps,
    slots: {
      openPickerIcon: ({ ownerState, ...props }: { ownerState: any }) => CalendarIcon(props),
      openPickerButton: SmallIconButton,
      clearIcon: ({ ownerState, ...props }: { ownerState: any }) => CancelIcon(props),
      clearButton: SmallIconButton,
      ...props.slots,
    },
    slotProps: {
      textField: { fullWidth: fullWidth ?? true },
      field: { clearable: true },
      ...props.slotProps,
    },
    sx: {
      '& .MuiInputBase-root': {
        paddingRight: '8px',
      },
    },
  };
};

export default function AclDatePicker(props: AclDatePickerProps) {
  const forwardedProps = getForwardedProps(props);

  // defaultvalue reference : const defaultDate = parse("2022-04-22", "yyyy-MM-dd", new Date());

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DemoContainer sx={DEMO_CONTAINER} components={['DatePicker']}>
            <DatePicker {...forwardedProps} />
          </DemoContainer>
        </LocalizationProvider>
      </ThemeProvider>
    </>
  );
}
