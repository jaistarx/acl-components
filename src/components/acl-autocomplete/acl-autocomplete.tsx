import {
  Autocomplete,
  AutocompleteFreeSoloValueMapping,
  Checkbox,
  CircularProgress,
  ListItemText,
  Popper,
  PopperProps,
  TextField,
  ThemeProvider,
} from '@mui/material';
import React from 'react';
import { AclThemeProvider, CancelIcon } from '../../common';
import { AclAutocompleteProps } from './acl-autocomplete.type';

const CustomPopper = (props: PopperProps) => (
  <Popper
    {...props}
    modifiers={[
      {
        name: 'preventOverflow',
        options: {
          boundary: 'viewport',
        },
      },
      {
        name: 'flip',
        options: {
          fallbackPlacements: ['top', 'bottom', 'right', 'left'],
        },
      },
    ]}
    style={{ ...props.style, minWidth: 'fit-content', maxWidth: '100vw' }}
  />
);

const getForwardedProps = <
  Value extends Record<string, any>,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
>(
  props: AclAutocompleteProps<Value, Multiple, DisableClearable, FreeSolo>,
) => {
  const { label, optionIdKey, optionValueKey, showCheckbox, required, loading, ...restOfProps } = props;

  return {
    ...restOfProps,
    disablePortal: props.disablePortal ?? true,
    disableCloseOnSelect: props.disableCloseOnSelect ?? props.multiple ?? false,
    noOptionsText: props.noOptionsText ?? 'No Results Found',
    clearIcon: props.clearIcon ?? <CancelIcon />,
    fullWidth: props.fullWidth ?? true,
    limitTags: props.limitTags ?? 2,
    popupIcon: props.popupIcon ?? (loading ? <CircularProgress size={20} /> : undefined),
    readOnly: props.readOnly ?? loading ?? false,
    slots: { ...props.slots, popper: CustomPopper },
    getOptionKey:
      props.getOptionKey ??
      ((option: Value | AutocompleteFreeSoloValueMapping<FreeSolo>) =>
        (option as Record<string, any>)[(optionIdKey as string) ?? 'id'] ?? JSON.stringify(option)),
    getOptionLabel:
      props.getOptionLabel ??
      ((option: Value | AutocompleteFreeSoloValueMapping<FreeSolo>) =>
        (option as Record<string, any>)[(optionValueKey as string) ?? 'value'] ?? 'undefined_value'),
    renderInput: props.renderInput ?? ((params) => <TextField {...params} label={`${label}${required ? ' *' : ''}`} />),
    renderOption:
      props.renderOption ??
      ((props, option, { selected }) => {
        const { key, ...optionProps } = props;

        return (
          <li key={key} {...optionProps}>
            {Boolean(showCheckbox) && <Checkbox checked={selected} />}
            <ListItemText>{option[(optionValueKey as string) ?? 'value'] ?? 'undefined_value'}</ListItemText>
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
  ...props
}: AclAutocompleteProps<Value, Multiple, DisableClearable, FreeSolo>) => {
  const forwardedProps = getForwardedProps(props);

  return (
    <ThemeProvider theme={AclThemeProvider}>
      <Autocomplete {...forwardedProps} />
    </ThemeProvider>
  );
};

export default AclAutocomplete;
