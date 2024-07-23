import { fileActions, getFileProcessing } from '@/redux/file';
import { getIconFromFileType } from '@/utils/common/helper';
import useAppDispatch from '@/utils/hooks/app-dispatch';
import useAppSelector from '@/utils/hooks/app-selector';
import { AclDatepicker, AclIcon, AclSpinner } from '@acl/ui';
import { format } from 'date-fns';
import React, { useEffect } from 'react';
import { columns } from './view-files.constant';
import ViewFilesStyles from './view-files.module.css';
import { TableColDef, TableRowDef } from './view-files.type';

const ViewFiles = () => {
  const dispatch = useAppDispatch();
  const file = useAppSelector((state) => state.file);

  const handleDateChange = (selectedDate: Date | null) => {
    if (selectedDate) {
      const measureDate = format(selectedDate, 'dd-MMM-yyyy');
      dispatch(getFileProcessing({ measureDate }));
    }
  };

  useEffect(() => {
    dispatch(fileActions.reset());
  }, [dispatch]);

  return (
    <>
      <div className={ViewFilesStyles['outer-container']}>
        <div className={ViewFilesStyles['header-container']}>
          <h2 className={ViewFilesStyles['view-files-main-name']}>View Files</h2>
          <AclDatepicker
            onAccept={(date: Date | null) => handleDateChange(date)}
            label="select month and year"
            openTo="month"
            views={['month', 'year']}
          />
        </div>
        {file.loading ? (
          <AclSpinner />
        ) : Boolean(file.data?.fileProcessing?.length) ? (
          <div>
            <table className={ViewFilesStyles['view-files-table']}>
              <thead>
                <tr>
                  {columns.map((column: TableColDef<TableRowDef>, colIndex: number) => (
                    <th key={colIndex}>{column.headerName}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {file.data?.fileProcessing?.map((row: TableRowDef, rowIndex: number) => (
                  <tr key={rowIndex}>
                    {columns.map((column: TableColDef<TableRowDef>, colIndex: number) => {
                      switch (column.field) {
                        case 'fileExtension':
                          return (
                            <td key={colIndex}>
                              <AclIcon
                                className={ViewFilesStyles['icon']}
                                src={getIconFromFileType(row[column.field] ?? null)}
                              />
                            </td>
                          );
                        case 'uploadDate':
                        case 'measureDate':
                          return <td key={colIndex}>{row[column.field]?.split('T')[0]}</td>;
                        case 'fileSize':
                          return <td key={colIndex}>{row[column.field] + ' KB'}</td>;
                        default:
                          return <td key={colIndex}>{row[column.field]}</td>;
                      }
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h3>No Data Found</h3>
        )}
      </div>
    </>
  );
};

export default ViewFiles;
