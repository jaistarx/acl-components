import { render, screen } from '@testing-library/react';
import React from 'react';
import { AclAvatar } from '../..';

describe('AclAvatar', () => {
  it('renders Avatar with children', () => {
    render(<AclAvatar>Test Content</AclAvatar>);
    const avatar = screen.getByText('Test Content');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveClass('MuiAvatar-root');
    expect(avatar).toHaveTextContent('Test Content');
  });

  it('passes additional props to Avatar', () => {
    render(<AclAvatar alt="Test Alt" src="test-image.png" />);
    const avatarImage = screen.getByRole('img');
    expect(avatarImage).toHaveClass('MuiAvatar-img');
    expect(avatarImage).toHaveAttribute('alt', 'Test Alt');
    expect(avatarImage).toHaveAttribute('src', 'test-image.png');
  });
});
