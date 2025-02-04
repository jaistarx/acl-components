import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { AclDropdown, AclDropdownProps } from '../..';

const defaultProps: AclDropdownProps = {
  label: 'Test Dropdown',
  options: [
    { id: '1', value: 'Option 1' },
    { id: '2', value: 'Option 2' },
    { id: '3', value: 'Option 3' },
  ],
};

beforeAll(() => {
  jest.spyOn(console, 'warn').mockImplementation(() => {
    /* NOTE: Empty Object */
  });
});

afterAll(() => {
  jest.restoreAllMocks();
});

describe('AclDropdown', () => {
  it('should render dropdown with options', async () => {
    render(<AclDropdown {...defaultProps} />);
    const input = screen.getByRole('combobox');
    fireEvent.mouseDown(input);
    await waitFor(() => screen.getByText(/Option 1/));
    expect(screen.getByText(/Option 1/)).toBeInTheDocument();
    expect(screen.getByText(/Option 2/)).toBeInTheDocument();
    expect(screen.getByText(/Option 3/)).toBeInTheDocument();
  });

  it('should select a single option', async () => {
    render(<AclDropdown {...defaultProps} />);
    const input = screen.getByRole('combobox');
    fireEvent.mouseDown(input);
    const option = await screen.findByText(/Option 1/);
    fireEvent.click(option);
    expect(input).toHaveTextContent('Option 1');
  });

  it('should select multiple options', async () => {
    render(<AclDropdown {...defaultProps} value={[]} multiple showCheckbox />);
    const input = screen.getByRole('combobox');
    fireEvent.mouseDown(input);
    const option1 = await screen.findByText(/Option 1/);
    const option2 = await screen.findByText(/Option 2/);
    fireEvent.click(option1);
    fireEvent.click(option2);
    expect(input).toHaveTextContent('Option 1, Option 2');
  });

  it('should show "No Results Found" if options are empty', async () => {
    render(<AclDropdown {...defaultProps} options={[]} />);
    const input = screen.getByRole('combobox');
    fireEvent.mouseDown(input);
    await waitFor(() => screen.getByText(/No Results Found/));
    expect(screen.getByText(/No Results Found/)).toBeInTheDocument();
  });

  it('should show loading icon when loading prop is true', async () => {
    render(<AclDropdown {...defaultProps} loading />);
    const input = screen.getByRole('combobox');
    fireEvent.mouseDown(input);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('should trigger onChange when an option is selected', async () => {
    const onChange = jest.fn();
    render(<AclDropdown {...defaultProps} onChange={onChange} />);
    const input = screen.getByRole('combobox');
    fireEvent.mouseDown(input);
    const option = await screen.findByText(/Option 1/);
    fireEvent.click(option);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('should format default value properly', async () => {
    render(<AclDropdown {...defaultProps} defaultValue={{ id: '1', value: 'Option 1' }} />);
    await waitFor(() => expect(screen.getByText('Option 1')).toBeInTheDocument());
  });

  it('should support multiple values as default', () => {
    render(
      <AclDropdown
        {...defaultProps}
        defaultValue={[
          { i: '1', val: 'Option 1' },
          { i: '2', val: 'Option 2' },
        ]}
        optionIdKey="i"
        optionValueKey="val"
        multiple
      />,
    );
    expect(screen.getByRole('combobox')).toHaveTextContent('Option 1, Option 2');
  });

  it('should supports other props', async () => {
    const onChange = jest.fn();
    render(
      <AclDropdown
        label="Test Dropdown"
        options={[
          { i: '1', val: 'Option 1' },
          { i: '2', val: 'Option 2' },
          { i: '3', val: 'Option 3' },
        ]}
        onChange={onChange}
        optionIdKey="i"
        optionValueKey="val"
        variant="standard"
      />,
    );
    const input = screen.getByRole('combobox');
    fireEvent.mouseDown(input);
    const option = await screen.findByText(/Option 1/);
    fireEvent.click(option);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('should supports invalid props or values', async () => {
    const onChange = jest.fn();
    render(
      <AclDropdown
        label="Test Dropdown"
        options={[{ val: 'Option 1' }, { val: 'Option 2' }, { val: 'Option 3' }]}
        optionValueKey="value"
        variant="standard"
        defaultValue={{ val: 'Option 4' }}
      />,
    );
    const input = screen.getByRole('combobox');
    fireEvent.mouseDown(input);
    expect(onChange).toHaveBeenCalledTimes(0);
    expect(screen.getAllByText('undefined_value')).not.toHaveLength(0);
  });

  it('should supports invalid values for multiselect', async () => {
    const onChange = jest.fn();
    render(
      <AclDropdown
        label="Test Dropdown"
        options={[{ val: 'Option 1' }, { val: 'Option 2' }, { val: 'Option 3' }]}
        optionValueKey="value"
        variant="standard"
        defaultValue={[{ val: 'Option 4' }]}
        multiple
      />,
    );
    const input = screen.getByRole('combobox');
    fireEvent.mouseDown(input);
    expect(onChange).toHaveBeenCalledTimes(0);
    expect(screen.getAllByText('undefined_value')).not.toHaveLength(0);
  });
});
