import { render, screen } from '@testing-library/react';
import React from 'react';
import { AclListItemText } from '../..';

describe('AclListItemText', () => {
  it('renders ListItemText with children', () => {
    render(<AclListItemText>Test Content</AclListItemText>);
    const content = screen.getByText('Test Content');
    expect(content).toBeInTheDocument();
  });

  it('applies additional props to ListItemText', () => {
    const { container } = render(<AclListItemText data-testid="custom-text">Test Content</AclListItemText>);
    const listItemText = container.querySelector('[data-testid="custom-text"]');
    expect(listItemText).toBeInTheDocument();
  });

  it('applies custom styles', () => {
    const { container } = render(<AclListItemText sx={{ color: 'red' }}>Test Content</AclListItemText>);
    const content = container.querySelector('.MuiListItemText-root');
    expect(content).toBeInTheDocument();
    expect(content).toHaveStyle('color: red');
  });
});
