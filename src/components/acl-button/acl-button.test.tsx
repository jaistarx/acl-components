import { render, screen } from '@testing-library/react';
import React from 'react';
import { AclButton } from '../..';

describe('AclButton', () => {
  it('renders the button with the correct text', () => {
    render(<AclButton>Click Me</AclButton>);
    const buttonElement = screen.getByRole('button', { name: 'Click Me' });
    expect(buttonElement).toBeInTheDocument();
  });

  it('applies the default variant if none is provided', () => {
    render(<AclButton>Default Variant</AclButton>);
    const buttonElement = screen.getByRole('button', { name: 'Default Variant' });
    expect(buttonElement).toHaveClass('MuiButton-contained');
  });

  it('applies the provided variant', () => {
    render(<AclButton variant="outlined">Outlined Variant</AclButton>);
    const buttonElement = screen.getByRole('button', { name: 'Outlined Variant' });
    expect(buttonElement).toHaveClass('MuiButton-outlined');
  });

  it('passes additional props to the Button component', () => {
    render(<AclButton disabled>Disabled Button</AclButton>);
    const buttonElement = screen.getByRole('button', { name: 'Disabled Button' });
    expect(buttonElement).toBeDisabled();
  });
});
