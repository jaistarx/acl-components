import { render, screen } from '@testing-library/react';
import React from 'react';
import { AclModal } from '../..';

describe('AclModal', () => {
  it('renders the modal when open is true', () => {
    render(
      <AclModal open>
        <div data-testid="modal-content">Modal Content</div>
      </AclModal>,
    );

    expect(screen.getByTestId('modal-content')).toBeInTheDocument();
  });

  it('does not render the modal when open is false or invalid', () => {
    render(
      <AclModal open={undefined as unknown as boolean}>
        <div data-testid="modal-content">Modal Content</div>
      </AclModal>,
    );

    expect(screen.queryByTestId('modal-content')).not.toBeInTheDocument();
  });

  it('applies custom modal styles', () => {
    render(
      <AclModal open modalDisplayStyle={{ backgroundColor: 'red' }} disableAutoFocus={false}>
        <div data-testid="modal-content">Modal Content</div>
      </AclModal>,
    );

    expect(screen.getByTestId('modal-content').parentElement).toHaveStyle('background-color: red');
  });
});
