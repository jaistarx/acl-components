import { TabProps, TabsProps } from '@mui/material';

type OmittedTabsProps = {
  variant?: 'standard' | 'scrollable' | 'fullWidth';
};

export declare type AclTabsProps = Omit<TabsProps, keyof OmittedTabsProps> & {
  variant?: 'standard' | 'scrollable' | 'fullWidth' | 'primary' | 'secondary';
  tabItems?: AclTabItem[];
};

export declare type AclTabItem = TabProps & { count?: number };
