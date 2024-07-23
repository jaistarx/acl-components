import CustomUploadIcon from '@/assets/images/custom-upload-icon.svg';
import { postUploadedFile } from '@/redux/function-app';
import useAppDispatch from '@/utils/hooks/app-dispatch';
import useAppSelector from '@/utils/hooks/app-selector';
import { AclDatepicker, AclIcon } from '@acl/ui';
import { format } from 'date-fns';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import FileUploadStyles from './file-upload.module.css';

const FileUpload = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const [selectedDate, setSelectedDate] = useState<string>('');

  const handleDateChange = (date: Date | null) => {
    if (date) {
      const formattedDate = format(date, 'dd-MMM-yyyy');
      setSelectedDate(formattedDate);
    }
  };

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (Boolean(selectedDate)) {
        dispatch(postUploadedFile({ user, file: acceptedFiles[0], fileType: 'MonthlyEnrollment', date: selectedDate }));
      } else {
        alert('Select Month and Year!');
      }
    },
    [user, dispatch, selectedDate],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className={FileUploadStyles['file-upload-outer-container']}>
      <div className={FileUploadStyles['file-upload-container']}>
        <h2 className={FileUploadStyles['file-upload-title']}>File Upload</h2>
        <AclDatepicker
          onChange={(date: Date | null) => handleDateChange(date)}
          label="select month and year"
          openTo="month"
          views={['month', 'year']}
        />
        <div {...getRootProps()} className={FileUploadStyles['file-upload-dropzone']}>
          <div>
            <AclIcon className={FileUploadStyles['file-upload-icon']} src={CustomUploadIcon} alt="custom-upload-icon" />
          </div>
          <input {...getInputProps()} />
          <p className={FileUploadStyles['file-upload-dropzone-text']}>
            {isDragActive ? 'Drop the files here ...' : "Drag 'n' drop some files here, or click to select files"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
