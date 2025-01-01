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
import React, { useEffect, useState } from 'react';
import { AclThemeProvider, LoaderIcon } from '../../common';
import { IDictionary } from '../../common/types';
import { CHECKBOX_TEXT_CONTAINER, DONE_ICON, NO_RESULT_FOUND } from './acl-dropdown.constant';
import { AclDropdownProps } from './acl-dropdown.type';

const getForwardedProps = (props: AclDropdownProps): IDictionary<any> => {
  const { onChange, value, options, optionIdKey, optionValueKey, showCheckbox, loading, ...forwardedProps } = props;

  return {
    ...forwardedProps,
    fullWidth: props.fullWidth ?? (props.variant !== 'standard' ? true : false),
    readOnly: props.readOnly ?? loading ?? false,
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
  const [selectedOptions, setSelectedOptions] = useState<string | string[] | ''>(
    getDefaultValues(forwardedProps.defaultValue, forwardedProps.multiple),
  );

  const handleChange = (event: SelectChangeEvent<typeof selectedOptions>, child: React.ReactNode): void => {
    const {
      target: { value: changedValue },
    } = event;

    if (!changedValue) return;
    setSelectedOptions(changedValue);

    const parsedSelectedOptions: IDictionary<any> | IDictionary<any>[] = Array.isArray(changedValue)
      ? changedValue.map((option) => JSON.parse(option))
      : JSON.parse(changedValue);

    const eventCopy = event as SelectChangeEvent<IDictionary<any> | IDictionary<any>[]>;
    eventCopy.target.value = parsedSelectedOptions;

    if (props.onChange) props.onChange(eventCopy, child);
  };

  useEffect(() => {
    setSelectedOptions(getDefaultValues(forwardedProps.defaultValue, forwardedProps.multiple));
  }, [forwardedProps.defaultValue, forwardedProps.multiple]);

  useEffect(() => {
    const formattedValue = Array.isArray(props.value)
      ? props.value.map((element: IDictionary<any>) => JSON.stringify(element))
      : props.value
        ? JSON.stringify(props.value)
        : '';

    setSelectedOptions(formattedValue);
  }, [props.value]);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <FormControl {...forwardedProps}>
          <InputLabel>{props.label}</InputLabel>
          <Select
            value={selectedOptions}
            onChange={handleChange}
            IconComponent={props.loading ? LoaderIcon : undefined}
            renderValue={(selected: string | string[] | null) =>
              Array.isArray(selected) ? (
                <>
                  {selected.map((option: string, index: number) => (
                    <span key={JSON.parse(option)[props.optionIdKey ?? 'id'] ?? index}>
                      {option ? JSON.parse(option)[props.optionValueKey ?? 'value'] : 'undefined_value'}
                      {index < selected?.length - 1 && ', '}
                    </span>
                  ))}
                </>
              ) : (
                <span key={JSON.parse(selected ?? '{}')[props.optionIdKey ?? 'id'] ?? selected}>
                  {JSON.parse(selected ?? '{}')[props.optionValueKey ?? 'value'] ?? 'undefined_value'}
                </span>
              )
            }
            {...forwardedProps}
          >
            {Array.isArray(options) && options?.length > 0 ? (
              options?.map((option: IDictionary<any>, index: number) => (
                <MenuItem key={option[props.optionIdKey ?? 'id'] ?? index} value={JSON.stringify(option)}>
                  <Box sx={CHECKBOX_TEXT_CONTAINER}>
                    {props.showCheckbox && (
                      <Checkbox
                        checked={
                          selectedOptions !== null &&
                          selectedOptions !== undefined &&
                          selectedOptions.indexOf(JSON.stringify(option)) > -1
                        }
                      />
                    )}
                    <ListItemText primary={option[props.optionValueKey ?? 'value'] ?? 'undefined_value'} />
                  </Box>
                  {props.variant === 'standard' &&
                    selectedOptions !== null &&
                    selectedOptions !== undefined &&
                    selectedOptions.indexOf(JSON.stringify(option)) > -1 && <DoneIcon sx={DONE_ICON} />}
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
