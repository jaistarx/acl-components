import { TableColDef, TableRowDef } from './view-files.type';

export const columns: TableColDef<TableRowDef>[] = [
  { field: 'fileExtension', headerName: '' },
  {
    field: 'fileType',
    headerName: 'File Type',
  },
  {
    field: 'fileName',
    headerName: 'File Name',
  },
  {
    field: 'fileSize',
    headerName: 'Size',
  },
  {
    field: 'uploadDate',
    headerName: 'Upload Date',
  },
  {
    field: 'measureDate',
    headerName: 'Measure Date',
  },
  {
    field: 'fileStatus',
    headerName: 'Status',
  },
  {
    field: 'fileFrequency',
    headerName: 'Frequency',
  },
];
