import { AclSnackbarProvider } from '@acl/ui';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  // <React.StrictMode>
  <AclSnackbarProvider>
    <App />
  </AclSnackbarProvider>,
  // </React.StrictMode>,
);
