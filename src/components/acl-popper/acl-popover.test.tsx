import { render, screen } from '@testing-library/react';
import React from 'react';
import { AclPopper } from '../..';

describe('AclPopper', () => {
  it('renders Popover with children', () => {
    render(
      <AclPopper open={true} anchorEl={document.body}>
        Test Popover
      </AclPopper>,
    );
    const popover = screen.getByText('Test Popover');
    expect(popover).toBeInTheDocument();
  });

  it('renders nothing when open is false', () => {
    render(
      <AclPopper open={false} anchorEl={document.body}>
        Test Popover
      </AclPopper>,
    );
    const popover = screen.queryByText('Test Popover');
    expect(popover).not.toBeInTheDocument();
  });
});
