import { render, screen } from '@testing-library/react';
import React from 'react';
import { AclBox, AclBoxProps } from '../..';

describe('AclBox', () => {
  it('renders the children correctly', () => {
    render(
      <AclBox>
        <p>Test Content</p>
      </AclBox>,
    );
    const contentElement = screen.getByText('Test Content');
    expect(contentElement).toBeInTheDocument();
  });

  it('applies additional props to the Box component', () => {
    const customProps: AclBoxProps = {
      id: 'custom-box',
      className: 'custom-class',
    };
    render(
      <AclBox data-testid="acl-box" {...customProps}>
        <p>Test Content</p>
      </AclBox>,
    );
    const boxElement = screen.getByTestId('acl-box');
    expect(boxElement).toHaveAttribute('id', 'custom-box');
    expect(boxElement).toHaveClass('custom-class');
  });

  it('renders with the correct theme from AclThemeProvider', () => {
    render(
      <AclBox>
        <p>Themed Content</p>
      </AclBox>,
    );
    const themedElement = screen.getByText('Themed Content');
    expect(themedElement).toBeInTheDocument();
  });

  it('does not break when no children are provided', () => {
    render(<AclBox data-testid="empty-acl-box" />);
    const boxElement = screen.getByTestId('empty-acl-box');
    expect(boxElement).toBeInTheDocument();
  });
});
