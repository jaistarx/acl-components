import { render, screen } from '@testing-library/react';
import React from 'react';
import { AclListItem } from '../..';

describe('AclListItem', () => {
  it('renders ListItem with children', () => {
    render(<AclListItem>Test Content</AclListItem>);
    const listItem = screen.getByText('Test Content');
    expect(listItem).toBeInTheDocument();
  });

  it('passes additional props to ListItem', () => {
    const { container } = render(<AclListItem data-testid="custom-list-item">Test Content</AclListItem>);
    const listItem = container.querySelector('[data-testid="custom-list-item"]');
    expect(listItem).toBeInTheDocument();
  });

  it('applies custom styles to ListItem', () => {
    const { container } = render(<AclListItem style={{ color: 'red' }}>Test Content</AclListItem>);
    const listItem = container.querySelector('li');
    expect(listItem).toHaveStyle('color: red');
  });
});
