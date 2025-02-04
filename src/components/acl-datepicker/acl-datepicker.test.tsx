import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { AclDatepicker } from '../..';

describe('AclDatepicker', () => {
  it('renders the date picker', () => {
    render(<AclDatepicker />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('opens the calendar when clicking the calendar icon', async () => {
    render(<AclDatepicker />);
    const button = screen.getByRole('button', { name: /Choose date/i });
    await userEvent.click(button);
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
  });

  it('clears the date when clicking the clear icon', async () => {
    render(<AclDatepicker />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, '04/22/2022');
    expect(input).toHaveValue('04/22/2022');

    const clearButton = screen.getByRole('button', { name: /cancel-icon/i });
    await userEvent.click(clearButton);
    expect(input).toHaveValue('MM/DD/YYYY');
  });

  it('does not display full width when fullWidth is false', async () => {
    const { container } = render(<AclDatepicker fullWidth={false} />);
    const input = container.querySelector('.MuiInputBase-root');
    expect(input).not.toHaveClass('MuiInputBase-fullWidth');
  });
});
