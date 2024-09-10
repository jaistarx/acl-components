import { ThemeProvider } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import React from 'react';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import { DEMO_CONTAINER } from '../../constants/aclDatepickerConstant';
import { IAclDatePickerProps } from '../../types/aclDatepickerEntity';

const getExposedProps = (props: IAclDatePickerProps) => {
  return {
    ...props,
  };
};

export default function AclDatePicker(props: IAclDatePickerProps) {
  const exposedProps = getExposedProps(props);

  // defaultvalue reference : const defaultDate = parse("2022-04-22", "yyyy-MM-dd", new Date());

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DemoContainer sx={DEMO_CONTAINER} components={['DatePicker']}>
            <DatePicker
              slotProps={{
                textField: { size: 'small' },
              }}
              {...exposedProps}
            />
          </DemoContainer>
        </LocalizationProvider>
      </ThemeProvider>
    </>
  );
}
