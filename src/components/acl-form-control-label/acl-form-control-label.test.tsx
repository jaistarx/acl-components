import { Checkbox } from '@mui/material';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { AclFormControlLabel } from '../..';

describe('AclFormControlLabel', () => {
  it('renders FormControlLabel with default props', () => {
    render(<AclFormControlLabel label="Test Label" control={<Checkbox />} />);
    const label = screen.getByText('Test Label');
    expect(label).toBeInTheDocument();
  });

  it('passes additional props to FormControlLabel', () => {
    const { container } = render(
      <AclFormControlLabel label="Test Label" control={<Checkbox />} data-testid="custom-label" />,
    );
    const formControlLabel = container.querySelector('[data-testid="custom-label"]');
    expect(formControlLabel).toBeInTheDocument();
  });

  it('renders control component correctly', () => {
    render(<AclFormControlLabel label="Test Label" control={<Checkbox />} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });
});
