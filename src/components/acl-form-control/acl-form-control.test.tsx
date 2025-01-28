import { render, screen } from '@testing-library/react';
import React from 'react';
import { AclFormControl } from '../..';

describe('AclFormControl', () => {
  it('renders FormControl with children', () => {
    render(
      <AclFormControl>
        <div>Test Content</div>
      </AclFormControl>,
    );
    const content = screen.getByText('Test Content');
    expect(content).toBeInTheDocument();
  });

  it('applies default ThemeProvider', () => {
    const { container } = render(
      <AclFormControl>
        <div>Test Content</div>
      </AclFormControl>,
    );
    const themeProvider = container.querySelector('div');
    expect(themeProvider).toBeInTheDocument();
  });

  it('passes additional props to FormControl', () => {
    const { container } = render(
      <AclFormControl data-testid="custom-form-control">
        <div>Test Content</div>
      </AclFormControl>,
    );
    const formControl = container.querySelector('[data-testid="custom-form-control"]');
    expect(formControl).toBeInTheDocument();
  });
});
