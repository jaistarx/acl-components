import { render, screen } from '@testing-library/react';
import React from 'react';
import { AclDivider } from '../..';

describe('AclDivider', () => {
  it('renders Divider with children', () => {
    render(
      <AclDivider>
        <span>Test Content</span>
      </AclDivider>,
    );
    const content = screen.getByText('Test Content');
    expect(content).toBeInTheDocument();
  });

  it('applies default ThemeProvider', () => {
    const { container } = render(
      <AclDivider>
        <span>Test Content</span>
      </AclDivider>,
    );
    const themeProvider = container.querySelector('div');
    expect(themeProvider).toBeInTheDocument();
  });

  it('passes additional props to Divider', () => {
    const { container } = render(
      <AclDivider data-testid="custom-divider">
        <span>Test Content</span>
      </AclDivider>,
    );
    const divider = container.querySelector('[data-testid="custom-divider"]');
    expect(divider).toBeInTheDocument();
  });
});
