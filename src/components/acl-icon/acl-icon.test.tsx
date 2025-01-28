import { render, screen } from '@testing-library/react';
import React from 'react';
import { AclIcon } from '../..';

describe('AclIcon', () => {
  it('renders the img element with default alt text', () => {
    render(<AclIcon src="test-icon.png" />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test-icon.png');
    expect(image).toHaveAttribute('alt', 'icon');
  });

  it('renders the img element with custom alt text', () => {
    render(<AclIcon src="test-icon.png" alt="Custom Icon" />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test-icon.png');
    expect(image).toHaveAttribute('alt', 'Custom Icon');
  });

  it('applies custom styles to the img element', () => {
    const customStyle = { width: '50px', height: '50px' };
    render(<AclIcon src="test-icon.png" style={customStyle} />);
    const image = screen.getByRole('img');
    expect(image).toHaveStyle('width: 50px');
    expect(image).toHaveStyle('height: 50px');
  });

  it('passes additional props to the img element', () => {
    render(<AclIcon src="test-icon.png" data-testid="custom-icon" />);
    const image = screen.getByTestId('custom-icon');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test-icon.png');
  });

  it('sets the crossOrigin attribute if provided', () => {
    render(<AclIcon src="test-icon.png" crossOrigin="anonymous" />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('crossorigin', 'anonymous');
  });
});
