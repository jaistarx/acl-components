import { render, screen } from '@testing-library/react';
import React from 'react';
import { AclLink } from '../..';

describe('AclLink', () => {
  it('renders Link with children', () => {
    render(<AclLink>Test Link</AclLink>);
    const link = screen.getByText('Test Link');
    expect(link).toBeInTheDocument();
  });

  it('applies default props to Link', () => {
    const { container } = render(<AclLink>Default Props</AclLink>);
    const link = container.querySelector('button');
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent('Default Props');
  });

  it('passes additional props to Link', () => {
    render(
      <AclLink component="button" href="https://example.com" underline="hover" data-testid="custom-link">
        Custom Link
      </AclLink>,
    );
    const link = screen.getByTestId('custom-link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveClass('MuiLink-underlineHover');
  });
});
