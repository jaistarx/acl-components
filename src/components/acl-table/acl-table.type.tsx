import { TableVirtuosoProps } from 'react-virtuoso';
import { IDictionary } from '../../common/types';

export declare type AclTableProps<T = any, C = AclTableVirtuosoContext> = TableVirtuosoProps<T, C> & {
  children?: React.ReactNode;
  rowItems: IDictionary<T>[];
  columnItems: AclTableColDef<T>[];
  onRowClick?: (event: React.MouseEvent<unknown>, row: IDictionary<T>) => void;
  selectedRows?: (selectedRows: readonly IDictionary<T>[]) => void;
  defaultSelectedRows?: IDictionary<T>[];
  hideCheckbox?: boolean;
  stickyLastColumn?: boolean;
  defaultSortingKey?: string | number | symbol;
  defaultSortingOrder?: Order;
  noDataText?: React.ReactNode;
  disableRowSelect?: boolean;
  hasCollapsibleContent?: boolean;
};

export declare type AclTableVirtuosoContext<T = unknown> = {
  rowItems: IDictionary<T>[];
  columnItems: AclTableColDef<T>[];
  selectedRows: readonly (string | number)[];
  handleSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: (event: React.MouseEvent<unknown>, row: IDictionary<T>) => void;
  order: Order;
  orderBy: string | number | symbol;
  handleRequestSort: (event: React.MouseEvent<unknown>, property: string | number | symbol) => void;
  props: AclTableProps;
  openCollapsibleContent: IDictionary<boolean>;
  setOpenCollapsibleContent: React.Dispatch<React.SetStateAction<IDictionary<boolean>>>;
};

export declare type AclTableColDef<T = unknown> = {
  field: keyof T;
  headerName: string;
  width?: number | string | undefined;
  align?: 'left' | 'right' | 'center' | undefined;
  sortable?: boolean;
};

export declare type Order = 'asc' | 'desc';
