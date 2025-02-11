import React, { createContext, useCallback, useState } from 'react';
import { DropEvent, FileRejection } from 'react-dropzone';
import { AclDropzoneProviderProps, UseAclDropzone } from './acl-dropzone.type';

export const AclDropzoneContext = createContext<UseAclDropzone | undefined>(undefined);

const AclDropzoneProvider = ({ children, acceptedFiles, fileRejections, dropEvent }: AclDropzoneProviderProps) => {
  const [acceptedFilesLocal, setAcceptedFilesLocal] = useState<File[] | undefined>(acceptedFiles || undefined);
  const [fileRejectionsLocal, setFileRejectionsLocal] = useState<FileRejection[] | undefined>(
    fileRejections || undefined,
  );
  const [dropEventLocal, setDropEventLocal] = useState<DropEvent | undefined>(dropEvent || undefined);

  const resetAclDropzone = useCallback(() => {
    setAcceptedFilesLocal(undefined);
    setFileRejectionsLocal(undefined);
    setDropEventLocal(undefined);
  }, []);

  const handleOnDrop = useCallback((accepted: File[], rejections: FileRejection[], event: DropEvent) => {
    setAcceptedFilesLocal(accepted);
    setFileRejectionsLocal(rejections);
    setDropEventLocal(event);
  }, []);

  return (
    <AclDropzoneContext.Provider
      value={{
        acceptedFiles: acceptedFilesLocal,
        fileRejections: fileRejectionsLocal,
        dropEvent: dropEventLocal,
        resetAclDropzone,
        handleOnDrop,
      }}
    >
      {children}
    </AclDropzoneContext.Provider>
  );
};

export default AclDropzoneProvider;
