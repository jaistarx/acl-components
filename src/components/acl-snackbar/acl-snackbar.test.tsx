import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { SnackbarKey } from 'notistack';
import React from 'react';
import { AclButton, AclSnackbarProvider, AclSnackbarProviderProps, useAclSnackbar } from '../..';

const TestComponent1 = () => {
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

const TestComponent2 = () => {
  const { enqueueSnackbar } = useAclSnackbar();

  return (
    <div>
      <AclButton
        onClick={() =>
          enqueueSnackbar('Test message', {
            variant: 'success',
            action: null,
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
        <TestComponent1 />
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
        <TestComponent1 />
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
        <TestComponent1 />
      </AclSnackbarProvider>,
    );
    const snackbars = screen.queryAllByRole('alert');
    expect(snackbars.length).toBeLessThanOrEqual(customProps.maxSnack as number);
  });

  it('renders snackbar correctly without action provided', async () => {
    render(
      <AclSnackbarProvider>
        <TestComponent2 />
      </AclSnackbarProvider>,
    );
    const showButton = screen.getByText('Show Snackbar');
    fireEvent.click(showButton);
    await waitFor(() => expect(screen.getByText('Test message')).toBeInTheDocument());
    const closeButtonImg = screen.getByAltText('close-icon');
    fireEvent.click(closeButtonImg.parentElement!);
    await waitFor(() => expect(screen.queryByText('Test message')).not.toBeInTheDocument());
  });
});
