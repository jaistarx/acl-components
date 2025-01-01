import { SelectProps } from '@mui/material';
import { IDictionary } from '../../common/types';

type OmittedDropdownProps = {
  label: React.ReactNode;
  defaultValue?: any;
};

export type AclDropdownProps<Value = any> = Omit<SelectProps<Value>, keyof OmittedDropdownProps> & {
  label?: string;
  options?: IDictionary<any>[];
  optionIdKey?: string | number | symbol;
  optionValueKey?: string | number | symbol;
  defaultValue?: IDictionary<any> | IDictionary<any>[];
  showCheckbox?: boolean;
  loading?: boolean;
};
