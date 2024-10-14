import '@testing-library/jest-dom';

jest.mock('@acl/ui', () => ({
  AclModal: jest.fn(({ openModal, children }) => (openModal ? <div>{children}</div> : null)),
  AclInput: jest.fn(({ fullWidth, ...props }) => <input {...props} />),
  AclButton: jest.fn(({ children, ...props }) => <button {...props}>{children}</button>),
  AclInputSuggestion: jest.fn(({ fullWidth, ...props }) => <input {...props} />),
  AclIcon: jest.fn(({ ...props }) => <img {...props} />),
  useAclSnackbar: jest.fn(() => ({
    enqueueSnackbar: jest.fn(),
    closeSnackbar: jest.fn(),
  })),
}));
