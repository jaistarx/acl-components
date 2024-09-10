import { TableColDef, TableRowDef } from './view-files.type';

export const COLUMNS: TableColDef<TableRowDef>[] = [
  { field: 'requirements', headerName: 'Requirement' },
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
    headerName: 'Date Uploaded',
  },
  {
    field: 'actions',
    headerName: 'Actions',
  },
];
