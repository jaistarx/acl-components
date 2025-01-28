import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { AclRadio } from '../..';

describe('AclRadio', () => {
  it('renders Radio button with correct label', () => {
    render(<AclRadio value="test" name="test-group" />);
    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
  });

  it('passes custom props to Radio', () => {
    render(<AclRadio value="test" name="test-group" disabled />);
    const radio = screen.getByRole('radio');
    expect(radio).toBeDisabled();
  });

  it('handles click events', () => {
    const handleChange = jest.fn();
    render(<AclRadio value="test" name="test-group" onChange={handleChange} />);
    const radio = screen.getByRole('radio');
    fireEvent.click(radio);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('applies correct value and name', () => {
    render(<AclRadio value="test" name="test-group" />);
    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('value', 'test');
    expect(radio).toHaveAttribute('name', 'test-group');
  });
});
