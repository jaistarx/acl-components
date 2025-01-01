import { useContext } from 'react';
import { AclDropzoneContext } from './acl-dropzone.provider';
import { UseAclDropzone } from './acl-dropzone.type';

const defaultDropzoneContext: UseAclDropzone = {
  acceptedFiles: [],
  fileRejections: [],
  dropEvent: undefined,
  resetAclDropzone: () => {
    /* empty function */
  },
  handleOnDrop: () => {
    /* empty function */
  },
};

export const useAclDropzone = (): UseAclDropzone => {
  const context = useContext(AclDropzoneContext);

  if (!context) {
    return defaultDropzoneContext;
  }

  return context;
};
