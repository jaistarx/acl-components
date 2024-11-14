import {
  Autocomplete,
  AutocompleteFreeSoloValueMapping,
  Checkbox,
  ListItemText,
  TextField,
  ThemeProvider,
} from '@mui/material';
import React from 'react';
import { AclThemeProvider } from '../../common';
import { AclAutocompleteProps } from './aclAutocomplete.type';

const getForwardedProps = <
  Value extends Record<string, any>,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
>(
  props: AclAutocompleteProps<Value, Multiple, DisableClearable, FreeSolo>,
) => {
  const { label, optionIdKey, optionValueKey, showCheckbox, ...restOfProps } = props;

  return {
    ...restOfProps,
    disablePortal: props.disablePortal ?? true,
    disableCloseOnSelect: props.disableCloseOnSelect ?? props.multiple ?? false,
    noOptionsText: props.noOptionsText ?? 'No Results Found',
    getOptionKey:
      props.getOptionKey ??
      ((option: Value | AutocompleteFreeSoloValueMapping<FreeSolo>) =>
        (option as Record<string, any>)[(optionIdKey as string) ?? 'id'] ?? 'id'),
    getOptionLabel:
      props.getOptionLabel ??
      ((option: Value | AutocompleteFreeSoloValueMapping<FreeSolo>) =>
        (option as Record<string, any>)[(optionValueKey as string) ?? 'value'] ?? 'value'),
    renderInput: props.renderInput ?? ((params) => <TextField {...params} label={label} />),
    renderOption:
      props.renderOption ??
      ((props, option, { selected }) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps}>
            {Boolean(showCheckbox) && <Checkbox checked={selected} />}
            <ListItemText>{option[(optionValueKey as string) ?? 'value'] ?? 'value'}</ListItemText>
          </li>
        );
      }),
  };
};

const AclAutocomplete = <
  Value extends Record<string, any>,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
>({
  children,
  ...props
}: AclAutocompleteProps<Value, Multiple, DisableClearable, FreeSolo>) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <ThemeProvider theme={AclThemeProvider}>
      <Autocomplete {...forwardedProps}>{children}</Autocomplete>
    </ThemeProvider>
  );
};

export default AclAutocomplete;
