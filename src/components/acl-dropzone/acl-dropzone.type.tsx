import React from 'react';
import { DropEvent, DropzoneProps, FileRejection } from 'react-dropzone';

export declare type AclDropzoneProps = DropzoneProps & {
  onClickUpload?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isUploading?: boolean;
  helperText?: string | React.ReactNode;
  errorText?: string | React.ReactNode;
  disableUploadButton?: boolean;
};

export declare type UseAclDropzone = {
  acceptedFiles?: File[];
  fileRejections?: FileRejection[];
  dropEvent?: DropEvent;
  resetAclDropzone: () => void;
  handleOnDrop: (accepted: File[], rejections: FileRejection[], event: DropEvent) => void;
};

export type AclDropzoneProviderProps = {
  children: React.ReactNode;
};
