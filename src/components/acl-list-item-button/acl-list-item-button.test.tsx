import { render, screen } from '@testing-library/react';
import React from 'react';
import { AclListItemButton } from '../..';

describe('AclListItemButton', () => {
  it('renders ListItemButton with children', () => {
    render(
      <AclListItemButton>
        <div>Test Content</div>
      </AclListItemButton>,
    );
    const content = screen.getByText('Test Content');
    expect(content).toBeInTheDocument();
  });

  it('passes additional props to ListItemButton', () => {
    const { getByTestId } = render(<AclListItemButton data-testid="custom-button">Test Button</AclListItemButton>);
    const button = getByTestId('custom-button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Test Button');
  });

  it('applies custom styles', () => {
    const { getByText } = render(<AclListItemButton sx={{ color: 'red' }}>Styled Button</AclListItemButton>);
    const button = getByText('Styled Button');
    expect(button).toHaveStyle('color: red');
  });
});
