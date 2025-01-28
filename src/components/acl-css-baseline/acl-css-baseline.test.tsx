import { render, screen } from '@testing-library/react';
import React from 'react';
import { AclCssBaseline } from '../..';

describe('AclCssBaseline', () => {
  it('renders CssBaseline with children', () => {
    render(
      <AclCssBaseline>
        <div>Test Content</div>
      </AclCssBaseline>,
    );
    const content = screen.getByText('Test Content');
    expect(content).toBeInTheDocument();
  });

  it('applies default ThemeProvider', () => {
    const { container } = render(
      <AclCssBaseline>
        <div>Test Content</div>
      </AclCssBaseline>,
    );
    const themeProvider = container.querySelector('div');
    expect(themeProvider).toBeInTheDocument();
  });
});
