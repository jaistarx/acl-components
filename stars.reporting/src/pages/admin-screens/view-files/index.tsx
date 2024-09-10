import CloudUploadIcon from '@/assets/images/cloud-upload.svg';
import DeleteOutlineIcon from '@/assets/images/delete_outline.svg';
import DragNDropIcon from '@/assets/images/drag-n-drop.svg';
import VisibilityIcon from '@/assets/images/visibility.svg';
import { fileActions, getUploadedFiles } from '@/redux/file';
import { postDeleteFile, postUploadedFile } from '@/redux/function-app';
import { convertBytes, convertFileNameFormatToRegex, extractDateFromFileName } from '@/utils/common/helper';
import useAppDispatch from '@/utils/hooks/app-dispatch';
import useAppSelector from '@/utils/hooks/app-selector';
import { AclBackdrop, AclDatepicker, AclIcon, AclListItemButton, useAclSnackbar } from '@acl/ui';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Dropzone from 'react-dropzone';
import { COLUMNS } from './view-files.constant';
import ViewFilesStyles from './view-files.module.css';
import { TableColDef, TableRowDef } from './view-files.type';

const ViewFiles = () => {
  const dispatch = useAppDispatch();
  const { enqueueSnackbar, closeSnackbar } = useAclSnackbar();
  const file = useAppSelector((state) => state.file);
  const user = useAppSelector((state) => state.user);
  const [measureDate, setMeasureDate] = useState<string>('');

  const handleDateChange = async (selectedDate: Date | null) => {
    if (selectedDate) {
      const measureDate = format(selectedDate, 'dd-MMM-yyyy');
      setMeasureDate(measureDate);
      await dispatch(getUploadedFiles({ measureDate }));
    }
  };

  const checkFileFrequency = (
    uploadedFileNameWithoutExtension: string,
    fileFrequency: TableRowDef['fileFrequency'],
  ) => {
    const extractedDate = extractDateFromFileName(uploadedFileNameWithoutExtension);
    if (!extractedDate || !measureDate) return false;
    const currentDate = new Date(measureDate);

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

  const showFileValidityErrorSnackbar = (error: string, solution: string, rowRequirement: string | null): void => {
    enqueueSnackbar(
      <div>
        <b>{rowRequirement ?? ''}</b> upload failed! {error}
        <br />
        Required: <b>{solution}</b>
      </div>,
      { variant: 'error', autoHideDuration: null },
    );
  };

  const checkFileValidity = (file: File, row: TableRowDef): boolean => {
    const { name, size } = file;
    const { fileExtension, originalFileName, requirements, fileFrequency } = row;
    const uploadedFileExtension = name.split('.').pop()?.toLowerCase() || '';
    const uploadedFileNameWithoutExtension = name.substring(0, name.lastIndexOf('.')) || name;
    const maxFileSize = 1048576 * 5; // 5 MB in Bytes
    let isFileValid = true;

    if (uploadedFileExtension !== fileExtension?.trim()) {
      showFileValidityErrorSnackbar(`File extension doesn't match.`, `${fileExtension?.trim()}`, requirements);
      isFileValid = false;
    }

    if (size > maxFileSize) {
      showFileValidityErrorSnackbar(`File size limit exceeded.`, `< ${maxFileSize / 1048576} MB`, requirements);
      isFileValid = false;
    }

    if (size <= 0) {
      showFileValidityErrorSnackbar(`File size is invalid.`, `> 0 KB`, requirements);
      isFileValid = false;
    }

    if (!convertFileNameFormatToRegex(originalFileName?.trim() || '').test(uploadedFileNameWithoutExtension)) {
      showFileValidityErrorSnackbar(
        `File name format doesn't match.`,
        `${originalFileName?.trim() || ''}`,
        requirements,
      );
      isFileValid = false;
    }

    if (!checkFileFrequency(uploadedFileNameWithoutExtension, fileFrequency)) {
      const formattedMeasureDate =
        fileFrequency?.trim() === 'Monthly' ? format(measureDate, 'MMM yyyy') : format(measureDate, 'yyyy');

      showFileValidityErrorSnackbar(`Date doesn't match.`, `${formattedMeasureDate.toString()}`, requirements);
      isFileValid = false;
    }

    return isFileValid;
  };

  const handleFileDrop = async (files: File[], row: TableRowDef) => {
    closeSnackbar();
    const file = files[0];
    const isValid = checkFileValidity(file, row);

    if (isValid) {
      try {
        await dispatch(postUploadedFile({ user, file, fileType: row.fileType, date: measureDate })).unwrap();
        await dispatch(getUploadedFiles({ measureDate }));
        enqueueSnackbar(
          <div>
            <b>{row.requirements}</b> uploaded successfully
          </div>,
          { variant: 'success' },
        );
      } catch (error) {
        enqueueSnackbar((error as Error).message, { variant: 'error' });
      }
    }
  };

  const handleDeleteFile = async (row: TableRowDef) => {
    const { fileName, fileType } = row;
    const fileMeasureDate = row.measureDate?.trim().split('T')[0] || measureDate;

    if (fileName && fileMeasureDate && fileType) {
      try {
        await dispatch(postDeleteFile({ user, fileName, measureDate: fileMeasureDate, fileType })).unwrap();
        await dispatch(getUploadedFiles({ measureDate }));
        enqueueSnackbar(
          <div>
            <b>{row.requirements}</b> deleted successfully
          </div>,
          { variant: 'success' },
        );
      } catch (error) {
        enqueueSnackbar((error as Error).message, { variant: 'error' });
      }
    }
  };

  useEffect(() => {
    dispatch(fileActions.reset());

    return () => {
      closeSnackbar();
    };
  }, [dispatch, closeSnackbar]);

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
        {Boolean(file.data?.uploadedFiles?.length) ? (
          <div>
            <table className={ViewFilesStyles['table']}>
              <thead className={ViewFilesStyles['table-head']}>
                <tr>
                  {COLUMNS.map((column: TableColDef<TableRowDef>, colIndex: number) => (
                    <th key={colIndex}>{column.headerName}</th>
                  ))}
                </tr>
              </thead>
              <tbody className={ViewFilesStyles['table-body']}>
                {file.data?.uploadedFiles?.map((row: TableRowDef, rowIndex: number) => (
                  <tr key={rowIndex}>
                    {COLUMNS.map((column: TableColDef<TableRowDef>, colIndex: number) => {
                      if (Boolean(row['fileName'])) {
                        switch (column.field) {
                          case 'uploadDate':
                            return <td key={colIndex}>{row[column.field]?.split('T')[0]}</td>;
                          case 'fileSize':
                            return <td key={colIndex}>{convertBytes(Number(row[column.field]))}</td>;
                          case 'actions':
                            return (
                              <td key={colIndex + 1}>
                                <div className={ViewFilesStyles['actions-container']}>
                                  <AclListItemButton className={ViewFilesStyles['actions-icon-text-wrapper']}>
                                    <AclIcon src={VisibilityIcon} alt="" />
                                    <span>View</span>
                                  </AclListItemButton>
                                  <AclListItemButton
                                    className={ViewFilesStyles['actions-icon-text-wrapper']}
                                    onClick={() => handleDeleteFile(row)}
                                  >
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
      <AclBackdrop open={file.loading}></AclBackdrop>
    </>
  );
};

export default ViewFiles;
