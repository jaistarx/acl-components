import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { AclTable, AclTableProps } from '../..';

describe('AclTable', () => {
  let props: AclTableProps;

  beforeAll(() => {
    // NOTE: For mocking screen
    Object.defineProperty(global, 'innerHeight', {
      writable: true,
      value: 800,
    });

    Object.defineProperty(global, 'innerWidth', {
      writable: true,
      value: 1200,
    });
  });

  beforeEach(() => {
    props = {
      rowItems: [
        { id: 1, name: 'John Doe', age: 30 },
        { id: 2, name: 'Jane Smith', age: 25 },
      ],
      columnItems: [
        { field: 'name', headerName: 'Name' },
        { field: 'age', headerName: 'Age', sortable: true },
      ],
      style: { height: '200px' },
      onRowClick: jest.fn(),
      onChangeSelectedRows: jest.fn(),
      selectedRows: [],
      hideCheckbox: false,
      disableRowSelect: false,
      hasCollapsibleContent: false,
      onSelectAll: jest.fn(),
      defaultSortingState: { order: 'asc', field: 'name' },
      getSortingState: jest.fn(),
      sortingFunction: undefined,
      totalCount: 2,
      noDataText: 'No records found',
    };
  });

  it('renders table with correct headers', () => {
    render(<AclTable {...props} />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
  });

  it('renders correct number of rows', () => {
    const { container } = render(
      <div style={{ height: '500px' }}>
        <AclTable {...props} />
      </div>,
    );
    expect(container.querySelectorAll('.MuiTableRow-root')).toHaveLength(1);
  });

  it('selects and deselects all rows', () => {
    render(<AclTable {...props} />);
    fireEvent.click(screen.getByLabelText('select all'));
    expect(props.onSelectAll).toHaveBeenCalled();
    fireEvent.click(screen.getByLabelText('select all'));
    expect(props.onSelectAll).toHaveBeenCalledTimes(2);
  });

  it('sorts rows when column header is clicked', () => {
    render(<AclTable {...props} />);
    fireEvent.click(screen.getByText('Age'));
    expect(props.getSortingState).toHaveBeenCalledWith({ field: 'age', order: 'asc' });
  });

  it('renders no data message when no rows are provided', () => {
    props.rowItems = [];
    render(<AclTable {...props} />);
    expect(screen.getByText('No records found')).toBeInTheDocument();
  });
});
