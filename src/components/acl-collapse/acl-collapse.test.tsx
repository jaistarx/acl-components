import { render, screen } from '@testing-library/react';
import React from 'react';
import { AclCollapse } from '../..';

describe('AclCollapse', () => {
  it('renders Collapse with children', () => {
    render(
      <AclCollapse in={true}>
        <div data-testid="child">Test Content</div>
      </AclCollapse>,
    );
    const child = screen.getByTestId('child');
    expect(child).toBeInTheDocument();
    expect(child).toHaveTextContent('Test Content');
  });

  it('applies default props correctly', () => {
    const { container } = render(
      <AclCollapse>
        <div>Hidden Content</div>
      </AclCollapse>,
    );
    const collapseElement = container.querySelector('.MuiCollapse-root');
    expect(collapseElement).toBeNull();
  });

  it('applies unmountOnExit by default', () => {
    const { container } = render(
      <AclCollapse in={false}>
        <div>Unmounted Content</div>
      </AclCollapse>,
    );
    const collapseElement = container.querySelector('.MuiCollapse-root');
    expect(collapseElement).toBeNull();
  });

  it('respects passed props', () => {
    render(
      <AclCollapse in={true} timeout={500}>
        <div data-testid="child">Visible Content</div>
      </AclCollapse>,
    );
    const child = screen.getByTestId('child');
    expect(child).toBeInTheDocument();
  });
});
