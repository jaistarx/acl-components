import React from 'react';
import ReactDOM from 'react-dom/client';
import { AclGlobalProvider } from '..';
import CTest from './cTest';

// NOTE: Don't change this below line
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// FEATURE: Add providers here
root.render(
  <React.StrictMode>
    <AclGlobalProvider>
      <CTest />
    </AclGlobalProvider>
  </React.StrictMode>,
);
