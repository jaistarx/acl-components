import React from 'react';
import ReactDOM from 'react-dom/client';
import { AclButton } from '..';

// FEATURE: Test the components by importing and using it inside this function
const CTest = () => {
  return (
    <>
      <span>Hello</span>
      <div>
        <AclButton>Click here</AclButton>
      </div>
    </>
  );
};

// NOTE: Don't change this below part
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <CTest />
  </React.StrictMode>,
);
