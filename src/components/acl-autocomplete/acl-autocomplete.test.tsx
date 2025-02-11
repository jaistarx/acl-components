import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import React from 'react';
import { AclAutocomplete, AclAutocompleteProps } from '../..';

const options = [
  { id: 1, value: 'Option 1' },
  { id: 2, value: 'Option 2' },
  { id: 3, value: 'Option 3' },
];

describe('AclAutocomplete', () => {
  it('renders correctly', () => {
    render(<AclAutocomplete options={options} label="Test Autocomplete" />);
    expect(screen.getByLabelText('Test Autocomplete')).toBeInTheDocument();
  });

  it('displays options when clicked', async () => {
    render(<AclAutocomplete options={options} label="Test Autocomplete" />);
    userEvent.click(screen.getByRole('button', { name: 'Open' }));
    await waitFor(() => expect(screen.getByText('Option 1')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Option 2')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Option 3')).toBeInTheDocument());
  });

  it('selects an option', async () => {
    render(<AclAutocomplete options={options} label="Test Autocomplete" />);
    userEvent.click(screen.getByRole('button', { name: 'Open' }));
    await waitFor(() => userEvent.click(screen.getByText('Option 2')));
    await waitFor(() => expect(screen.getByDisplayValue('Option 2')).toBeInTheDocument());
  });

  it('clears selection when clear icon is clicked', async () => {
    const { container } = render(<AclAutocomplete options={options} label="Test Autocomplete" />);
    userEvent.click(screen.getByRole('button', { name: 'Open' }));
    await waitFor(() => userEvent.click(screen.getByText('Option 1')));
    await waitFor(() => expect(screen.getByDisplayValue('Option 1')).toBeInTheDocument());
    await waitFor(() =>
      userEvent.click(
        container.querySelector('.MuiAutocomplete-clearIndicator') ?? screen.getByRole('button', { name: 'Clear' }),
      ),
    );
    await waitFor(() => expect(screen.getByDisplayValue('')).toBeInTheDocument());
  });

  it('displays loading indicator when loading is true', () => {
    render(
      <AclAutocomplete options={options} optionIdKey="id" optionValueKey="value" label="Test Autocomplete" loading />,
    );
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('displays undefined_value when provided value is incorrect', async () => {
    render(
      <AclAutocomplete
        value={{} as Record<string, any>}
        options={[{ i: 1, val: 'Option 1' }]}
        label="Test Autocomplete"
      />,
    );
    expect(screen.getByRole('combobox')).toHaveValue('undefined_value');
    await waitFor(() => userEvent.click(screen.getByRole('button', { name: 'Open' })));
    await waitFor(() => expect(screen.getByText('undefined_value')).toBeInTheDocument());
  });

  it('handles custom props correctly', async () => {
    const props: AclAutocompleteProps<Record<string, any>, boolean, boolean, boolean> = {
      options: [{ val: 'Option 1' }, { val: 'Option 2' }, { val: 'Option 3' }],
      label: 'Test Autocomplete',
      disablePortal: false,
      disableCloseOnSelect: true,
      noOptionsText: 'Sample no options text',
      fullWidth: false,
      limitTags: 4,
      readOnly: false,
      showCheckbox: true,
      optionValueKey: 'val',
      required: true,
      multiple: true,
      clearIcon: <div>X</div>,
      popupIcon: <div>^</div>,
      getOptionKey: (option: string | Record<string, any>) => JSON.stringify(option),
      getOptionLabel: (option: string | Record<string, any>) => (option as Record<string, any>)['value'] ?? '',
    };
    render(<AclAutocomplete {...props} />);
    expect(screen.getByLabelText('Test Autocomplete *')).toBeInTheDocument();
    await waitFor(() => userEvent.click(screen.getByRole('button', { name: 'Open' })));
    await waitFor(() => expect(screen.getByText('Option 1')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Option 2')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Option 3')).toBeInTheDocument());
    await waitFor(() => expect(screen.getAllByRole('checkbox')).not.toHaveLength(0));
    await waitFor(() => userEvent.click(screen.getByText('Option 2')));
    await waitFor(() => expect(screen.getAllByText('Option 2')).not.toHaveLength(0));
  });

  it('renders custom input', async () => {
    const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation((message) => {
      if (message.includes('MUI: Unable to find the input element')) {
        return;
      }

      console.error(message);
    });

    const props: AclAutocompleteProps<Record<string, any>, boolean, boolean, boolean> = {
      options,
      renderInput: () => <input type="text" />,
    };
    render(<AclAutocomplete {...props} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();

    consoleErrorMock.mockRestore();
  });

  it('renders custom options', async () => {
    const props: AclAutocompleteProps<Record<string, any>, boolean, boolean, boolean> = {
      options,
      renderOption: (props, option) => {
        const { key, ...optionProps } = props;

        return (
          <li key={key} {...optionProps}>
            {option['value'] ?? ''}
          </li>
        );
      },
    };
    render(<AclAutocomplete {...props} />);
    await waitFor(() => userEvent.click(screen.getByRole('button', { name: 'Open' })));
    await waitFor(() => expect(screen.getAllByRole('option')).toHaveLength(3));
  });

  it('renders correct optionIdKey and optionValueKey', async () => {
    const props: AclAutocompleteProps<Record<string, any>> = {
      options: [
        { i: 1, val: 'Option 1' },
        { i: 2, val: 'Option 2' },
      ],
      label: 'Test Autocomplete',
      optionIdKey: 'i',
      optionValueKey: 'val',
      renderOption: '' as unknown as jest.Mock,
    };
    render(<AclAutocomplete {...props} />);
    expect(screen.getByLabelText('Test Autocomplete')).toBeInTheDocument();
    await waitFor(() => userEvent.click(screen.getByRole('button', { name: 'Open' })));
    await waitFor(() => expect(screen.getAllByRole('option')).toHaveLength(2));
    await waitFor(() => expect(screen.getByText('Option 1')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Option 2')).toBeInTheDocument());
  });
});
