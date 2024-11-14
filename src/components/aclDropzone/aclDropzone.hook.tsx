import { useContext } from 'react';
import { AclDropzoneContext } from './aclDropzone.provider';
import { UseAclDropzone } from './aclDropzone.type';

const defaultDropzoneContext: UseAclDropzone = {
  acceptedFiles: [],
  fileRejections: [],
  dropEvent: undefined,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  resetAclDropzone: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleOnDrop: () => {},
};

export const useAclDropzone = (): UseAclDropzone => {
  const context = useContext(AclDropzoneContext);

  if (!context) {
    return defaultDropzoneContext;
  }

  return context;
};
