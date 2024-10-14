import { SelectProps } from '@mui/material';
import { IDictionary } from '../../common/types/common.type';

type OmittedDropdownProps = {
  // Added key if needed
  label: React.ReactNode;
  defaultValue?: any;
};

export type AclDropdownProps = Omit<SelectProps<string | string[]>, keyof OmittedDropdownProps> & {
  label?: string;
  options?: IDictionary<any>[];
  optionIdKey?: string | number;
  optionValueKey?: string | number;
  defaultValue?: IDictionary<any> | IDictionary<any>[];
};
