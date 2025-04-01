import { TableVirtuosoProps } from 'react-virtuoso';
import { IDictionary } from '../../common/types';

export declare type AclTableProps<
  T = any,
  C = AclTableVirtuosoContext,
  Field extends keyof T = keyof T,
> = TableVirtuosoProps<T, C> & {
  children?: React.ReactNode;
  rowItems: IDictionary<T>[];
  columnItems: AclTableColDef<T>[];
  onRowClick?: (event: React.MouseEvent<unknown>, row: IDictionary<T>) => void;
  onChangeSelectedRows?: (
    event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<unknown>,
    selectedRows: IDictionary<T>[],
  ) => void;
  defaultSelectedRows?: IDictionary<T>[];
  selectedRows?: IDictionary<T>[];
  hideCheckbox?: boolean;
  stickyLastColumn?: boolean;
  noDataText?: React.ReactNode;
  disableRowSelect?: boolean;
  hasCollapsibleContent?: boolean;
  onSelectAll?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultSortingState?: { field: OrderBy; order?: Order };
  getSortingState?: ({ field, order }: { field: OrderBy; order: Order }) => void;
  sortingFunction?: (a: T[Field], b: T[Field]) => number;
  loading?: boolean;
};

export declare type AclTableVirtuosoContext<T = unknown> = {
  rowItems: IDictionary<T>[];
  columnItems: AclTableColDef<T>[];
  selectedRows: readonly (string | number)[];
  handleSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: (event: React.MouseEvent<unknown>, row: IDictionary<T>) => void;
  order: Order;
  orderBy: OrderBy;
  handleRequestSort: (event: React.MouseEvent<unknown>, property: OrderBy) => void;
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

export declare type OrderBy = string | number | symbol;
