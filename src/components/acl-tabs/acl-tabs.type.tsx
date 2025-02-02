import { TabProps, TabsProps } from '@mui/material';
import { CSSProperties } from 'react';

type OmittedTabsProps = {
  variant?: 'standard' | 'scrollable' | 'fullWidth';
};

export declare type AclTabsProps = Omit<TabsProps, keyof OmittedTabsProps> & {
  variant?: 'standard' | 'scrollable' | 'fullWidth' | 'primary' | 'secondary';
  tabItems?: AclTabItem[];
  justifyContent?: CSSProperties['justifyContent'];
};

export declare type AclTabItem = TabProps & { count?: number };
