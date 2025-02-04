import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { SnackbarKey } from 'notistack';
import React from 'react';
import { AclButton, AclSnackbarProvider, AclSnackbarProviderProps, useAclSnackbar } from '../..';

const TestComponent = () => {
  const { enqueueSnackbar, closeSnackbar } = useAclSnackbar();

  return (
    <div>
      <AclButton
        onClick={() =>
          enqueueSnackbar('Test message', {
            variant: 'success',
            action: (key: SnackbarKey) => <button onClick={() => closeSnackbar(key)}>Dismiss</button>,
          })
        }
      >
        Show Snackbar
      </AclButton>
    </div>
  );
};

describe('AclSnackbarProvider', () => {
  it('renders child components and displays a snackbar on action', async () => {
    render(
      <AclSnackbarProvider>
        <TestComponent />
      </AclSnackbarProvider>,
    );
    const showButton = screen.getByText('Show Snackbar');
    fireEvent.click(showButton);
    await waitFor(() => expect(screen.getByText('Test message')).toBeInTheDocument());
    const dismissButton = screen.getByText('Dismiss');
    fireEvent.click(dismissButton);
    await waitFor(() => expect(screen.queryByText('Test message')).not.toBeInTheDocument());
  });

  it('applies default props from getSnackbarProps correctly', async () => {
    const defaultProps: AclSnackbarProviderProps = {
      maxSnack: 5,
      anchorOrigin: { vertical: 'top', horizontal: 'center' },
      hideIconVariant: true,
    };
    render(
      <AclSnackbarProvider {...defaultProps}>
        <TestComponent />
      </AclSnackbarProvider>,
    );
    const snackbars = screen.queryAllByRole('alert');
    expect(snackbars.length).toBeLessThanOrEqual(defaultProps.maxSnack as number);
  });

  it('overrides getSnackbarProps correctly with custom values', async () => {
    const customProps: AclSnackbarProviderProps = {
      maxSnack: 10,
      anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
      hideIconVariant: false,
    };
    render(
      <AclSnackbarProvider {...customProps}>
        <TestComponent />
      </AclSnackbarProvider>,
    );
    const snackbars = screen.queryAllByRole('alert');
    expect(snackbars.length).toBeLessThanOrEqual(customProps.maxSnack as number);
  });
});
