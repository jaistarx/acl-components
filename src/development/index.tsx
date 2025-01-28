import React from 'react';
import ReactDOM from 'react-dom/client';
import { AclGlobalProvider } from '..';
import Playground from './playground';

// NOTE: Don't change this below line
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// FEATURE: Add providers here
root.render(
  <React.StrictMode>
    <AclGlobalProvider>
      <Playground />
    </AclGlobalProvider>
  </React.StrictMode>,
);
