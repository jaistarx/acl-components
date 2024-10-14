import { ThemeProvider } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React from 'react';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import CalendarIcon from '../../common/imageComponents/calendarIcon';
import CancelIcon from '../../common/imageComponents/cancelIcon';
import { DEMO_CONTAINER } from './aclDatepicker.constant';
import { IAclDatePickerProps } from './aclDatepicker.type';

const getForwardedProps = (props: IAclDatePickerProps) => {
  const { slotProps, ...passedProps } = props;
  return {
    ...passedProps,
  };
};

export default function AclDatePicker(props: IAclDatePickerProps) {
  const forwardedProps = getForwardedProps(props);

  // defaultvalue reference : const defaultDate = parse("2022-04-22", "yyyy-MM-dd", new Date());

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DemoContainer sx={DEMO_CONTAINER} components={['DatePicker']}>
            <DatePicker
              slots={{
                openPickerIcon: CalendarIcon,
                clearIcon: CancelIcon,
              }}
              slotProps={{
                textField: { fullWidth: forwardedProps.fullWidth },
                field: { clearable: true },
                ...props.slotProps,
              }}
              {...forwardedProps}
            />
          </DemoContainer>
        </LocalizationProvider>
      </ThemeProvider>
    </>
  );
}
