import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { VirtuosoMockContext } from 'react-virtuoso';
import { AclTable, AclTableProps } from '../..';

describe('AclTable', () => {
  let props: AclTableProps;

  beforeEach(() => {
    props = {
      rowItems: [
        { id: 1, name: 'John Doe', age: 30, collapsibleContent: <>Custom collapsible content 1</> },
        { id: 2, name: ['Jane Smith'], age: 25 },
        { id: 3, name: <>Fisal</>, age: 37 },
        { id: 4, name: <>Fisal</>, age: 30, collapsibleContent: <>Custom collapsible content 2</> },
        { id: 5, name: 'Diamond', age: 24 },
        { id: 6, name: 'Chris', age: 40 },
        { id: 7, name: 'Chris', age: 40 },
      ],
      columnItems: [
        { field: 'name', headerName: 'Name' },
        { field: 'age', headerName: 'Age', sortable: true },
      ],
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
      fixedFooterContent: undefined,
      stickyLastColumn: true,
      loading: false,
    };
  });

  it('renders table with correct headers and footers', () => {
    props.fixedFooterContent = () => (
      <tr>
        <td>Footer content</td>
      </tr>
    );
    render(<AclTable {...props} />, {
      wrapper: ({ children }) => (
        <VirtuosoMockContext.Provider value={{ viewportHeight: 5000, itemHeight: 100 }}>
          {children}
        </VirtuosoMockContext.Provider>
      ),
    });
    expect(screen.getByText('Footer content')).toBeInTheDocument();
  });

  it('renders correct number of rows', () => {
    props.sortingFunction = jest.fn();
    render(<AclTable {...props} />, {
      wrapper: ({ children }) => (
        <VirtuosoMockContext.Provider value={{ viewportHeight: 5000, itemHeight: 100 }}>
          {children}
        </VirtuosoMockContext.Provider>
      ),
    });
    expect(screen.getAllByTestId('body-row')).toHaveLength(7);
    fireEvent.click(screen.getByText('Age'));
    fireEvent.click(screen.getByText('Age'));
    expect(props.getSortingState).toHaveBeenCalledWith({ field: 'age', order: 'desc' });
  });

  it('selects and deselects all rows', () => {
    render(<AclTable {...props} />, {
      wrapper: ({ children }) => (
        <VirtuosoMockContext.Provider value={{ viewportHeight: 5000, itemHeight: 100 }}>
          {children}
        </VirtuosoMockContext.Provider>
      ),
    });
    fireEvent.click(screen.getByLabelText('select all'));
    expect(props.onSelectAll).toHaveBeenCalled();
    fireEvent.click(screen.getByLabelText('select all'));
    expect(props.onSelectAll).toHaveBeenCalledTimes(2);
  });

  it('selects and deselects single row', async () => {
    jest.spyOn(window, 'getSelection').mockReturnValue({ type: 'None' } as Selection);

    const onChangeSelectedRows = jest.fn();
    render(
      <VirtuosoMockContext.Provider value={{ viewportHeight: 5000, itemHeight: 100 }}>
        <AclTable
          rowItems={props.rowItems}
          columnItems={props.columnItems}
          onChangeSelectedRows={onChangeSelectedRows}
        />
      </VirtuosoMockContext.Provider>,
    );
    const rows = screen.getAllByTestId('body-row');
    expect(rows.length).toBeGreaterThan(0);
    fireEvent.click(rows[1]);
    await waitFor(() => expect(onChangeSelectedRows).toHaveBeenCalledTimes(1));
    fireEvent.click(rows[2]);
    fireEvent.click(rows[3]);
    fireEvent.click(rows[1]);
    fireEvent.click(rows[1]);
    fireEvent.click(rows[3]);
    fireEvent.click(rows[1]);
    fireEvent.click(rows[3]);
    fireEvent.click(rows[2]);
    fireEvent.click(rows[4]);
    fireEvent.click(rows[3]);
    fireEvent.click(rows[2]);
    await waitFor(() => expect(onChangeSelectedRows).toHaveBeenCalled());
  });

  it('sorts rows when column header is clicked', () => {
    props.disableRowSelect = true;
    props.defaultSelectedRows = [{ id: 2, name: 'Jane Smith', age: 25 }];
    props.defaultSortingState = undefined;
    render(<AclTable {...props} />, {
      wrapper: ({ children }) => (
        <VirtuosoMockContext.Provider value={{ viewportHeight: 5000, itemHeight: 100 }}>
          {children}
        </VirtuosoMockContext.Provider>
      ),
    });
    fireEvent.click(screen.getByText('Age'));
    expect(props.getSortingState).toHaveBeenCalledWith({ field: 'age', order: 'asc' });
    fireEvent.click(screen.getByText('Name'));
    expect(props.getSortingState).toHaveBeenCalledWith({ field: 'name', order: 'asc' });
    fireEvent.click(screen.getByText('Name'));
    expect(props.getSortingState).toHaveBeenCalledWith({ field: 'name', order: 'desc' });
  });

  it('renders no data message when no rows are provided', () => {
    props.rowItems = [];
    props.noDataText = undefined;
    render(<AclTable {...props} />, {
      wrapper: ({ children }) => (
        <VirtuosoMockContext.Provider value={{ viewportHeight: 5000, itemHeight: 100 }}>
          {children}
        </VirtuosoMockContext.Provider>
      ),
    });
    expect(screen.getByText('No data to display')).toBeInTheDocument();
  });

  it('renders no data message when no rows are provided with custom message', () => {
    props.rowItems = [];
    render(<AclTable {...props} />, {
      wrapper: ({ children }) => (
        <VirtuosoMockContext.Provider value={{ viewportHeight: 5000, itemHeight: 100 }}>
          {children}
        </VirtuosoMockContext.Provider>
      ),
    });
    expect(screen.getByText('No records found')).toBeInTheDocument();
  });

  it('handles invalid rowItems and columnItems', () => {
    props.rowItems = null as unknown as [];
    props.columnItems = null as unknown as [];
    render(<AclTable {...props} />, {
      wrapper: ({ children }) => (
        <VirtuosoMockContext.Provider value={{ viewportHeight: 5000, itemHeight: 100 }}>
          {children}
        </VirtuosoMockContext.Provider>
      ),
    });
    expect(screen.getByText('No records found')).toBeInTheDocument();
  });

  it('renders CollapsibleContent correctly', () => {
    const consoleWarnMock = jest.spyOn(console, 'warn').mockImplementation((message) => {
      if (message.includes('Please ensure that the value passed to "selectedRows" is correct')) {
        return;
      }

      console.warn(message);
    });
    props.hasCollapsibleContent = true;
    props.stickyLastColumn = false;
    props.selectedRows = [
      ...props.rowItems,
      { id: 5, name: 'John Doe', age: 34 },
      { id: 6, name: 'Jane Smith', age: 45 },
    ];
    render(<AclTable {...props} />, {
      wrapper: ({ children }) => (
        <VirtuosoMockContext.Provider value={{ viewportHeight: 5000, itemHeight: 100 }}>
          {children}
        </VirtuosoMockContext.Provider>
      ),
    });
    const expandButton = screen.getAllByRole('button', { name: 'expand row' });
    const rows = screen.getAllByTestId('body-row');
    fireEvent.click(expandButton[0]);
    fireEvent.click(rows[2]);
    expect(rows).toHaveLength(14);
    consoleWarnMock.mockRestore();
  });

  it('handles undefined props', async () => {
    jest.spyOn(window, 'getSelection').mockReturnValue({
      type: 'Range',
    } as Selection);
    props.onSelectAll = undefined;
    props.onChangeSelectedRows = undefined;
    props.onRowClick = undefined;
    props.selectedRows = undefined;
    props.totalCount = undefined;
    props.getSortingState = undefined;
    render(
      <VirtuosoMockContext.Provider value={{ viewportHeight: 5000, itemHeight: 100 }}>
        <AclTable {...props} />
      </VirtuosoMockContext.Provider>,
    );
    const rows = screen.getAllByTestId('body-row');
    expect(rows).toHaveLength(7);
    fireEvent.click(screen.getByText('Age'));
    expect(props.getSortingState).toBeUndefined();
    fireEvent.click(screen.getByText('Name'));
    expect(props.getSortingState).toBeUndefined();
    fireEvent.click(screen.getByText('Name'));
    expect(props.getSortingState).toBeUndefined();
    fireEvent.click(screen.getByLabelText('select all'));
    fireEvent.click(screen.getByLabelText('select all'));
    expect(props.onSelectAll).toBeUndefined();
    await waitFor(() => fireEvent.click(rows[1]));
    await waitFor(() => fireEvent.click(rows[2]));
    await waitFor(() => fireEvent.click(rows[3]));
    await waitFor(() => fireEvent.click(rows[1]));
    expect(props.onChangeSelectedRows).toBeUndefined();
    expect(props.onRowClick).toBeUndefined();
  });

  it('shows backdrop loader when loading is true', () => {
    props.loading = true;
    const { container } = render(<AclTable {...props} />, {
      wrapper: ({ children }) => (
        <VirtuosoMockContext.Provider value={{ viewportHeight: 5000, itemHeight: 100 }}>
          {children}
        </VirtuosoMockContext.Provider>
      ),
    });
    expect(container.querySelector('.MuiCircularProgress-root')).toBeInTheDocument();
  });
});
