declare global {
  type CustomWindow = {
    NODE_ENV: string;
    REACT_APP_IAM_URL: string;
    REACT_APP_TIMEOUT: string;
    REACT_APP_REALM_PATH: string;
    REACT_APP_CLIENTID: string;
    REACT_APP_API_URL: string;
    REACT_APP_FUNCTION_URL: string;
  };

  // Augment the global Window object with the custom properties
  interface Window extends CustomWindow {}
}

// Ensure this file is treated as a module
export {};
