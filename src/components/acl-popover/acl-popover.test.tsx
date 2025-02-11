import { render, screen } from '@testing-library/react';
import React from 'react';
import { AclPopover } from '../..';

describe('AclPopover', () => {
  it('renders Popover with children', () => {
    render(
      <AclPopover open={true} anchorEl={document.body}>
        Test Popover
      </AclPopover>,
    );
    const popover = screen.getByText('Test Popover');
    expect(popover).toBeInTheDocument();
  });

  it('renders nothing when open is false', () => {
    render(
      <AclPopover open={false} anchorEl={document.body}>
        Test Popover
      </AclPopover>,
    );
    const popover = screen.queryByText('Test Popover');
    expect(popover).not.toBeInTheDocument();
  });

  it('respects other props', () => {
    render(
      <AclPopover
        open={true}
        anchorEl={document.body}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        Test Popover
      </AclPopover>,
    );
    const popover = screen.queryByText('Test Popover');
    expect(popover).toBeInTheDocument();
  });
});
