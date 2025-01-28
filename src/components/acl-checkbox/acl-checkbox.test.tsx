import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { AclCheckbox } from '../..';

describe('AclCheckbox', () => {
  it('should render the checkbox component', () => {
    render(<AclCheckbox data-testid="acl-checkbox" />);
    const spanElement = screen.getByTestId('acl-checkbox');
    expect(spanElement).toBeInTheDocument();
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(spanElement).toContainElement(checkbox);
  });

  it('should forward props to the checkbox component', () => {
    render(<AclCheckbox checked={true} disabled={true} data-testid="acl-checkbox" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
    expect(checkbox).toBeDisabled();
  });

  it('should call onChange handler when clicked', () => {
    const mockOnChange = jest.fn();
    render(<AclCheckbox onChange={mockOnChange} data-testid="acl-checkbox" />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it('should render the checkbox with AclThemeProvider', () => {
    render(<AclCheckbox data-testid="acl-checkbox" />);
    const themeProvider = screen.getByTestId('acl-checkbox').closest('div');
    expect(themeProvider).toBeInTheDocument();
  });

  it('should render with default props if none are provided', () => {
    render(<AclCheckbox data-testid="acl-checkbox" />);
    const checkbox = screen.getByTestId('acl-checkbox');
    expect(checkbox).not.toBeChecked();
    expect(checkbox).not.toBeDisabled();
  });
});
