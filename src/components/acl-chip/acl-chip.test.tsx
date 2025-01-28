import { render, screen } from '@testing-library/react';
import React from 'react';
import { AclChip } from '../..';

describe('AclChip', () => {
  it('renders the Chip component with default props', () => {
    render(<AclChip label="Default Chip" />);
    const chip = screen.getByText('Default Chip');
    const parent = chip.closest('.MuiChip-root');
    expect(parent).toBeInTheDocument();
    expect(parent).toHaveClass('MuiChip-root');
  });

  it('applies custom styles via sx prop', () => {
    render(<AclChip label="Styled Chip" sx={{ backgroundColor: 'red', fontSize: '14px' }} />);
    const chip = screen.getByText('Styled Chip');
    const parent = chip.closest('.MuiChip-root');
    expect(parent).toBeInTheDocument();
    expect(parent).toHaveStyle('font-size: 14px');
    expect(parent).toHaveStyle('background-color: red');
  });

  it('renders with a custom variant', () => {
    render(<AclChip label="Outlined Chip" variant="outlined" />);
    const chip = screen.getByText('Outlined Chip');
    const parent = chip.closest('.MuiChip-root');
    expect(parent).toBeInTheDocument();
    expect(parent).toHaveClass('MuiChip-outlined');
  });

  it('handles additional props correctly', () => {
    render(<AclChip label="Clickable Chip" onClick={jest.fn()} />);
    const chip = screen.getByText('Clickable Chip');
    const parent = chip.closest('.MuiChip-root');
    expect(parent).toBeInTheDocument();
    expect(parent).toHaveAttribute('role', 'button');
  });
});
