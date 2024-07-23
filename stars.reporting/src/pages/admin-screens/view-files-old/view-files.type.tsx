import { FileProcessingData } from '@/redux/file';

export type TableColDef<T> = {
  field: keyof T;
  headerName: string;
};

export type TableRowDef = FileProcessingData;
