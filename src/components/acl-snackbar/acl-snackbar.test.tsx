import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { SnackbarKey } from 'notistack';
import React from 'react';
import { AclButton, AclSnackbarProvider, useAclSnackbar } from '../..';

jest.mock('./acl-snackbar.hook', () => ({
  useAclSnackbar: jest.fn(),
}));

describe('AclSnackbarProvider', () => {
  it('should display the snackbar when button is clicked', async () => {
    const enqueueSnackbarMock = jest.fn();
    (useAclSnackbar as jest.Mock).mockReturnValue({ enqueueSnackbar: enqueueSnackbarMock });
    render(
      <AclSnackbarProvider>
        <AclButton onClick={() => enqueueSnackbarMock('Test Snackbar Message', { variant: 'error' })}>
          snackbar
        </AclButton>
      </AclSnackbarProvider>,
    );
    fireEvent.click(screen.getByText('snackbar'));
    await waitFor(() =>
      expect(enqueueSnackbarMock).toHaveBeenCalledWith('Test Snackbar Message', {
        variant: 'error',
      }),
    );
  });

  it('should render snackbar with custom variant', async () => {
    const enqueueSnackbarMock = jest.fn();
    (useAclSnackbar as jest.Mock).mockReturnValue({ enqueueSnackbar: enqueueSnackbarMock });
    render(
      <AclSnackbarProvider>
        <AclButton onClick={() => enqueueSnackbarMock('Test Custom Variant', { variant: 'success' })}>
          snackbar
        </AclButton>
      </AclSnackbarProvider>,
    );
    fireEvent.click(screen.getByText('snackbar'));
    await waitFor(() =>
      expect(enqueueSnackbarMock).toHaveBeenCalledWith('Test Custom Variant', {
        variant: 'success',
      }),
    );
  });

  it('should close the snackbar when close button is clicked', async () => {
    const enqueueSnackbarMock = jest.fn();
    const closeSnackbarMock = jest.fn();
    (useAclSnackbar as jest.Mock).mockReturnValue({
      enqueueSnackbar: enqueueSnackbarMock,
      closeSnackbar: closeSnackbarMock,
    });
    render(
      <AclSnackbarProvider>
        <AclButton
          onClick={() =>
            enqueueSnackbarMock('Test Snackbar Close', {
              variant: 'info',
              action: (key: SnackbarKey) => <button onClick={() => closeSnackbarMock(key)}>Close</button>,
            })
          }
        >
          snackbar
        </AclButton>
      </AclSnackbarProvider>,
    );
    fireEvent.click(screen.getByText('snackbar'));
    await waitFor(() => expect(enqueueSnackbarMock).toHaveBeenCalled());
  });
});
