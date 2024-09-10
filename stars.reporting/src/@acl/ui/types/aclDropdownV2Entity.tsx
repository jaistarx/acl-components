import { SelectProps } from '@mui/material';

type OmittedDropdownV2Props = {
  // Added key if needed
  label: React.ReactNode;
  defaultValue?: any;
};

export type Option = {
  id: string;
  value: string;
  [key: string | number]: any;
};

export type AclDropdownV2Props = Omit<SelectProps<string | string[]>, keyof OmittedDropdownV2Props> & {
  label?: string;
  options?: Option[];
  defaultValue?: Option | Option[];
  onClickOptionsAction?: (
    action: 'edit' | 'delete' | 'add',
    lookupName: string,
    lookupValue?: string,
    originalValues?: any,
  ) => void;
};
