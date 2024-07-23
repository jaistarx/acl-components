import CloudUploadIcon from '@/assets/images/cloud-upload.svg';
import DeleteOutlineIcon from '@/assets/images/delete_outline.svg';
import DragNDropIcon from '@/assets/images/drag-n-drop.svg';
import VisibilityIcon from '@/assets/images/visibility.svg';
import { fileActions, getUploadedFiles } from '@/redux/file';
import { postUploadedFile } from '@/redux/function-app';
import { convertFileNameFormatToRegex, extractMonthAndYearFromFileName } from '@/utils/common/helper';
import useAppDispatch from '@/utils/hooks/app-dispatch';
import useAppSelector from '@/utils/hooks/app-selector';
import { AclDatepicker, AclIcon, AclListItemButton, AclSpinner } from '@acl/ui';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Dropzone from 'react-dropzone';
import { columns } from './view-files.constant';
import ViewFilesStyles from './view-files.module.css';
import { TableColDef, TableRowDef } from './view-files.type';

const ViewFiles = () => {
  const dispatch = useAppDispatch();
  const file = useAppSelector((state) => state.file);
  const user = useAppSelector((state) => state.user);
  const [measureDate, setMeasureDate] = useState<string>('');

  const handleDateChange = (selectedDate: Date | null) => {
    if (selectedDate) {
      const measureDate = format(selectedDate, 'dd-MMM-yyyy');
      setMeasureDate(measureDate);
      dispatch(getUploadedFiles({ measureDate }));
    }
  };

  const checkFileFrequency = (
    uploadedFileNameWithoutExtension: string,
    fileFrequency: TableRowDef['fileFrequency'],
  ) => {
    const extractedDateString = extractMonthAndYearFromFileName(uploadedFileNameWithoutExtension);
    const extractedDate = new Date(extractedDateString);
    const currentDate = new Date();

    switch (fileFrequency?.trim()) {
      case 'Yearly':
        return extractedDate.getFullYear() === currentDate.getFullYear();
      case 'Monthly':
        return (
          extractedDate.getMonth() === currentDate.getMonth() &&
          extractedDate.getFullYear() === currentDate.getFullYear()
        );
      default:
        false;
    }
  };

  const checkFileValidity = (file: File, row: TableRowDef) => {
    const uploadedFileExtension = file.name?.split('.')?.pop()?.toLowerCase() || '';
    const uploadedFileNameWithoutExtension = file.name?.substring(0, file.name?.lastIndexOf('.')) || file.name;
    const uploadedFileSize = file.size;
    const maxFileSize = 1048576 * 5; // 5 MB in Bytes

    if (uploadedFileExtension !== row.fileExtension?.trim())
      return { message: `File extension doesn't match!\nRequired extension: ${row.fileExtension?.trim()}` };
    if (uploadedFileSize > maxFileSize)
      return { message: `File size exceeded limit!\nMaximum limit: ${maxFileSize / 1048576} MB` };
    if (!convertFileNameFormatToRegex(row.originalFileName?.trim() || '').test(uploadedFileNameWithoutExtension))
      return {
        message: `File name format doesn't match the requirement!\nRequired format: ${
          row.originalFileName?.trim() || ''
        }`,
      };
    if (!checkFileFrequency(uploadedFileNameWithoutExtension, row.fileFrequency))
      return { message: "Date given in the file name doesn't match the requirement!" };

    return { message: null };
  };

  const handleFileDrop = async (files: File[], row: TableRowDef) => {
    const file = files[0];
    const { message } = checkFileValidity(file, row);

    if (!Boolean(message)) {
      try {
        await dispatch(postUploadedFile({ user, file, fileType: row.fileType, date: measureDate })).unwrap();
        await dispatch(getUploadedFiles({ measureDate }));
      } catch (error) {
        console.error((error as Error).message);
      }
    } else {
      alert(message);
    }
  };

  useEffect(() => {
    dispatch(fileActions.reset());
  }, [dispatch]);

  return (
    <>
      <div className={ViewFilesStyles['outer-container']}>
        <div className={ViewFilesStyles['header-container']}>
          <div className={ViewFilesStyles['view-files-main-name']}>Plan Market Analysis</div>
          <AclDatepicker
            onAccept={(date: Date | null) => handleDateChange(date)}
            label="select month and year"
            openTo="month"
            views={['month', 'year']}
          />
        </div>
        <div className={ViewFilesStyles['file-upload-text']}>File Upload</div>
        {file.loading ? (
          <AclSpinner />
        ) : Boolean(file.data?.uploadedFiles?.length) ? (
          <div>
            <table className={ViewFilesStyles['table']}>
              <thead className={ViewFilesStyles['table-head']}>
                <tr>
                  {columns.map((column: TableColDef<TableRowDef>, colIndex: number) => (
                    <th key={colIndex}>{column.headerName}</th>
                  ))}
                </tr>
              </thead>
              <tbody className={ViewFilesStyles['table-body']}>
                {file.data?.uploadedFiles?.map((row: TableRowDef, rowIndex: number) => (
                  <tr key={rowIndex}>
                    {columns.map((column: TableColDef<TableRowDef>, colIndex: number) => {
                      if (Boolean(row['fileName'])) {
                        switch (column.field) {
                          case 'uploadDate':
                            return <td key={colIndex}>{row[column.field]?.split('T')[0]}</td>;
                          case 'fileSize':
                            return <td key={colIndex}>{Number(row[column.field]) / 1048576 + ' MB'}</td>;
                          case 'actions':
                            return (
                              <td key={colIndex + 1}>
                                <div className={ViewFilesStyles['actions-container']}>
                                  <AclListItemButton className={ViewFilesStyles['actions-icon-text-wrapper']}>
                                    <AclIcon src={VisibilityIcon} alt="" />
                                    <span>View</span>
                                  </AclListItemButton>
                                  <AclListItemButton className={ViewFilesStyles['actions-icon-text-wrapper']}>
                                    <AclIcon src={DeleteOutlineIcon} alt="" />
                                    <span>Remove</span>
                                  </AclListItemButton>
                                </div>
                              </td>
                            );
                          default:
                            return <td key={colIndex}>{row[column.field]}</td>;
                        }
                      } else if (colIndex === 0 || colIndex === 1) {
                        switch (column.field) {
                          case 'requirements':
                            return <td key={colIndex}>{row[column.field]}</td>;
                          default:
                            return (
                              <td key={colIndex} colSpan={4}>
                                <Dropzone onDrop={(acceptedFiles) => handleFileDrop(acceptedFiles, row)}>
                                  {({ getRootProps, getInputProps, isDragActive }) => (
                                    <section>
                                      <div {...getRootProps()}>
                                        <AclListItemButton
                                          className={`${ViewFilesStyles['upload-container']} ${
                                            isDragActive ? ViewFilesStyles['upload-container-drag-active'] : ''
                                          }`}
                                        >
                                          <input {...getInputProps()} />
                                          <div className={ViewFilesStyles['upload-drag-icon-text-wrapper']}>
                                            <AclIcon src={DragNDropIcon} alt="drag-n-drop" />
                                            <span>Drag {' & '} drop file here</span>
                                          </div>
                                          <span>|</span>
                                          <span>{`${row['fileExtension']} (Upto 5 MB)`}</span>
                                          <span>|</span>
                                          <div className={ViewFilesStyles['upload-drag-icon-text-wrapper']}>
                                            <AclIcon src={CloudUploadIcon} alt="cloud-upload" />
                                            <span>Or Upload from computer</span>
                                          </div>
                                        </AclListItemButton>
                                      </div>
                                    </section>
                                  )}
                                </Dropzone>
                              </td>
                            );
                        }
                      } else {
                        return null;
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
