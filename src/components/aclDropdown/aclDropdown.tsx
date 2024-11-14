import DoneIcon from '@mui/icons-material/Done';
import {
  Box,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  ThemeProvider,
} from '@mui/material';
import React, { useState } from 'react';
import { AclThemeProvider } from '../../common';
import { IDictionary } from '../../common/types';
import { DONE_ICON, NO_RESULT_FOUND } from './aclDropdown.constant';
import { AclDropdownProps } from './aclDropdown.type';

const getForwardedProps = (props: AclDropdownProps): IDictionary<any> => {
  const { onChange, value, options, optionIdKey, optionValueKey, showCheckbox, ...passedProps } = props;

  return {
    ...passedProps,
  };
};

const getDefaultValues = (
  defaultValue: IDictionary<any> | IDictionary<any>[] | undefined,
  multipleSelect: boolean | undefined,
): string | string[] => {
  if (defaultValue) {
    return Array.isArray(defaultValue)
      ? defaultValue.map((element: IDictionary<any>) => JSON.stringify(element))
      : JSON.stringify(defaultValue);
  } else {
    return multipleSelect ? [] : '';
  }
};

const AclDropdown = ({ children, ...props }: AclDropdownProps) => {
  const forwardedProps = getForwardedProps(props);
  const { options = [] } = props;
  const [selectedOptions, setSelectedOptions] = useState<string | string[]>(
    getDefaultValues(forwardedProps.defaultValue, forwardedProps.multiple),
  );

  const handleChange = (event: SelectChangeEvent<typeof selectedOptions>, child: React.ReactNode): void => {
    const {
      target: { value: changedValue },
    } = event;

    if (!changedValue) return;
    setSelectedOptions(changedValue);

    const parsedSelectedOptions = Array.isArray(changedValue)
      ? changedValue.map((option) => JSON.parse(option))
      : JSON.parse(changedValue);

    event.target.value = parsedSelectedOptions;

    if (props.onChange) props.onChange(event, child);
  };

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <FormControl {...forwardedProps}>
          <InputLabel>{props.label}</InputLabel>
          <Select
            value={selectedOptions}
            onChange={handleChange}
            renderValue={(selected: string | string[]) =>
              Array.isArray(selected) ? (
                <>
                  {selected.map((option: string, index: number) => (
                    <span key={JSON.parse(option)[props.optionIdKey ?? 'id'] ?? index}>
                      {option ? JSON.parse(option)[props.optionValueKey ?? 'value'] : ''}
                      {index < selected?.length - 1 && ', '}
                    </span>
                  ))}
                </>
              ) : (
                <span key={JSON.parse(selected)[props.optionIdKey ?? 'id'] ?? ''}>
                  {JSON.parse(selected)[props.optionValueKey ?? 'value'] ?? ''}
                </span>
              )
            }
            {...forwardedProps}
          >
            {Boolean(options) && options.length > 0 ? (
              options?.map((option: IDictionary<any>, index: number) => (
                <MenuItem key={option[props.optionIdKey ?? 'id'] ?? index} value={JSON.stringify(option)}>
                  {props.showCheckbox && <Checkbox checked={selectedOptions.indexOf(JSON.stringify(option)) > -1} />}
                  <ListItemText primary={option[props.optionValueKey ?? 'value'] ?? 'value'} />
                  {props.variant === 'standard' && selectedOptions.indexOf(JSON.stringify(option)) > -1 && (
                    <DoneIcon sx={DONE_ICON} />
                  )}
                </MenuItem>
              ))
            ) : (
              <Box sx={NO_RESULT_FOUND}>No Results Found</Box>
            )}
          </Select>
        </FormControl>
      </ThemeProvider>
    </>
  );
};

export default AclDropdown;
