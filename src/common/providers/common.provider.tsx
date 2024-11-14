import React from 'react';
import { AclDropzoneProvider, AclSnackbarProvider } from '../../components';
import { AclGlobalProviderProps } from '../types';

export const AclGlobalProvider = ({ children }: AclGlobalProviderProps) => {
  return (
    <AclSnackbarProvider>
      <AclDropzoneProvider>{children}</AclDropzoneProvider>
    </AclSnackbarProvider>
  );
};
