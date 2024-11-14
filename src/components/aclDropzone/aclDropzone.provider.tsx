import React, { createContext, useCallback, useState } from 'react';
import { DropEvent, FileRejection } from 'react-dropzone';
import { AclDropzoneProviderProps, UseAclDropzone } from './aclDropzone.type';

export const AclDropzoneContext = createContext<UseAclDropzone | undefined>(undefined);

const AclDropzoneProvider = ({ children }: AclDropzoneProviderProps) => {
  const [acceptedFiles, setAcceptedFiles] = useState<File[] | undefined>(undefined);
  const [fileRejections, setFileRejections] = useState<FileRejection[] | undefined>(undefined);
  const [dropEvent, setDropEvent] = useState<DropEvent | undefined>(undefined);

  const resetAclDropzone = useCallback(() => {
    setAcceptedFiles(undefined);
    setFileRejections(undefined);
    setDropEvent(undefined);
  }, []);

  const handleOnDrop = useCallback((accepted: File[], rejections: FileRejection[], event: DropEvent) => {
    setAcceptedFiles(accepted);
    setFileRejections(rejections);
    setDropEvent(event);
  }, []);

  return (
    <AclDropzoneContext.Provider
      value={{
        acceptedFiles,
        fileRejections,
        dropEvent,
        resetAclDropzone,
        handleOnDrop,
      }}
    >
      {children}
    </AclDropzoneContext.Provider>
  );
};

export default AclDropzoneProvider;
