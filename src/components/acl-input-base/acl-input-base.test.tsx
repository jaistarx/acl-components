import { render, screen } from '@testing-library/react';
import React from 'react';
import { AclInputBase } from '../..';

describe('AclInputBase', () => {
  it('renders AclInputBase', () => {
    render(<AclInputBase value="Sample Input" />);
    const inputBase = screen.getByDisplayValue('Sample Input');
    expect(inputBase).toBeInTheDocument();
  });

  it('renders AclInputBase with default props', () => {
    render(<AclInputBase value="Sample Input" />);
    const inputBase = screen.getByDisplayValue('Sample Input');
    expect(inputBase).toHaveClass('MuiInputBase-input');
  });

  it('renders AclInputBase with other props', () => {
    render(<AclInputBase disabled={true} value="Sample Input" />);
    const inputBase = screen.getByDisplayValue('Sample Input');
    expect(inputBase).toBeDisabled();
  });
});
