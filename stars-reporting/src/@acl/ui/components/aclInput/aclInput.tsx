import { ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import React from 'react';
import AclThemeProvider from '../../common/aclThemeProvider/aclThemeProvider';
import { INPUTLABEL_CSS_CONFIG } from '../../constants/aclInputConstant';
import { IColor, IDictionary } from '../../types/aclCore';
import { IInputExposedProps, IInputProps } from '../../types/aclInputEntity';

const getExposedProps = (props: IInputExposedProps): IDictionary<any> => {
  return {
    ...props,
    autoComplete: props.autoComplete ?? undefined,
    autoFocus: props.autoFocus ?? false,
    defaultValue: props.defaultValue ?? undefined,
    disabled: props.disabled ?? false,
    error: props.error ?? false,
    fullWidth: props.fullWidth ?? false,
    helperText: props.helperText ?? undefined,
    id: props.id ?? 'standard-basic',
    InputLabelProps: props.InputLabelProps ?? { style: INPUTLABEL_CSS_CONFIG },
    inputProps: props.inputProps ?? {},
    InputProps: props.InputProps ?? {},
    label: props.label ?? '',
    maxRows: props.maxRows ?? undefined,
    minRows: props.minRows ?? undefined,
    rows: props.rows ?? undefined,
    multiline: props.multiline ?? false,
    name: props.name ?? undefined,
    placeholder: props.placeholder ?? undefined,
    type: props.type ?? undefined,
    value: props.value ?? undefined,
    required: props.required ?? false,
    FormHelperTextProps: props.FormHelperTextProps ?? undefined,
    inputRef: props.inputRef ?? undefined,
    className: props.className ?? undefined,
    color: (props.color ?? 'primary') as IColor
  };
};

const AclInput = ({ children, ...props }: IInputProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <TextField variant="standard" onChange={(event: React.ChangeEvent<any>) => props.onChange(event?.target?.value)} {...exposedProps}>
          {children}
        </TextField>
      </ThemeProvider>
    </>
  );
};

export default AclInput;
