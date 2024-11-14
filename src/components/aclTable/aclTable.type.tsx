import { TableVirtuosoProps } from 'react-virtuoso';
import { IDictionary } from '../../common/types';

export declare type AclTableProps<T = any, C = AclTableVirtuosoContext> = TableVirtuosoProps<T, C> & {
  children?: React.ReactNode;
  rowItems: IDictionary<T>[];
  columnItems: AclTableColDef<T>[];
  onRowClick?: (row: IDictionary<T>) => void;
  selectedRows?: (selectedRows: readonly IDictionary<T>[]) => void;
  defaultSelectedRows?: IDictionary<T>[];
  hideCheckbox?: boolean;
  stickyLastColumn?: boolean;
};

export declare type AclTableVirtuosoContext<T = any> = {
  rowItems: IDictionary<T>[];
  columnItems: AclTableColDef<T>[];
  selectedRows: readonly (string | number)[];
  handleSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: (event: React.MouseEvent<unknown>, row: IDictionary<T>) => void;
  props: AclTableProps;
};

export declare type AclTableColDef<T = unknown> = {
  field: keyof T;
  headerName: string;
  width?: number | string | undefined;
  align?: 'left' | 'right' | 'center' | undefined;
};
