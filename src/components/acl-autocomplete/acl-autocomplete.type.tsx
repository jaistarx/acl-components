import { AutocompleteProps, TextFieldProps } from '@mui/material';
import React from 'react';

type OmittedAutocompleteProps = {
  renderInput: (params: TextFieldProps) => React.ReactNode;
};

export type AclAutocompleteProps<
  Value extends Record<string, any>,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
> = Omit<AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo>, keyof OmittedAutocompleteProps> & {
  children?: React.ReactNode;
  renderInput?: (params: TextFieldProps) => React.ReactNode;
  label?: React.ReactNode;
  optionIdKey?: string | number;
  optionValueKey?: string | number;
  showCheckbox?: boolean;
  required?: boolean;
  loading?: boolean;
};
