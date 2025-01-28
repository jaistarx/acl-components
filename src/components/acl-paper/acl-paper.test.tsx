import { render, screen } from '@testing-library/react';
import React from 'react';
import { AclPaper } from '../..';

describe('AclPaper', () => {
  it('renders Paper with children', () => {
    render(
      <AclPaper>
        <div>Test Content</div>
      </AclPaper>,
    );
    const content = screen.getByText('Test Content');
    expect(content).toBeInTheDocument();
  });

  it('applies default ThemeProvider', () => {
    const { container } = render(
      <AclPaper>
        <div>Test Content</div>
      </AclPaper>,
    );
    const themeProvider = container.querySelector('div');
    expect(themeProvider).toBeInTheDocument();
  });

  it('passes additional props to Paper', () => {
    render(<AclPaper data-testid="custom-paper">Test Content</AclPaper>);
    const paper = screen.getByTestId('custom-paper');
    expect(paper).toBeInTheDocument();
  });
});
