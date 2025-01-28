import { render } from '@testing-library/react';
import React from 'react';
import { AclInput } from '../..';

describe('AclInput', () => {
  it('renders without crashing', () => {
    const { getByRole } = render(<AclInput label="Test Input" />);
    const inputElement = getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  it('applies default props correctly', () => {
    const { getByRole } = render(<AclInput label="Default Props Test" />);
    const inputElement = getByRole('textbox');
    expect(inputElement).toHaveClass('MuiOutlinedInput-input');
    expect(inputElement).toHaveAttribute('aria-invalid', 'false');
  });

  it('overrides default props when provided', () => {
    const { container } = render(<AclInput label="Sample Input" fullWidth={false} />);
    const inputElement = container.querySelector('.MuiInputBase-root');
    expect(inputElement).toHaveClass('MuiOutlinedInput-root');
    expect(inputElement).not.toHaveClass('MuiInputBase-fullWidth');
  });

  it('supports custom props', () => {
    const placeholderText = 'Enter text';
    const { getByPlaceholderText } = render(<AclInput placeholder={placeholderText} />);
    const placeholderElement = getByPlaceholderText(placeholderText);
    expect(placeholderElement).toBeInTheDocument();
  });
});
