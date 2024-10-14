import { TabProps, TabsProps } from '@mui/material';

type OmittedTabsProps = {
  variant?: 'standard' | 'scrollable' | 'fullWidth';
};

export declare type AclTabsProps = Omit<TabsProps, keyof OmittedTabsProps> & {
  variant?: 'standard' | 'scrollable' | 'fullWidth' | 'primary' | 'secondary';
  tabItems?: AclTabItems[];
};

export declare type AclTabItems = TabProps & { count?: number };
