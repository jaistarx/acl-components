import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { AclTablePagination, AclTablePaginationProps } from '../..';

describe('AclTablePagination', () => {
  it('renders rows per page selector and pagination controls', () => {
    const props: AclTablePaginationProps = {
      rowsPerPage: [5, 10, 15],
      defaultRowsPerPage: 10,
      totalNumberOfRows: 50,
    };
    const { container } = render(<AclTablePagination {...props} />);
    const rowsPerPageSelector = container.querySelector('.MuiSelect-select');
    const option = screen.getByText('10');
    const pagination = screen.getByRole('navigation');
    expect(rowsPerPageSelector).toBeInTheDocument();
    expect(option).toBeInTheDocument();
    expect(pagination).toBeInTheDocument();
  });

  it('updates rows per page on change', () => {
    const handleRowsPerPageChange = jest.fn();
    const props: AclTablePaginationProps = {
      rowsPerPage: [5, 10, 15],
      defaultRowsPerPage: 10,
      totalNumberOfRows: 50,
      onChangeRowsPerPage: handleRowsPerPageChange,
    };
    const { container } = render(<AclTablePagination {...props} />);
    const rowsPerPageSelector = container.querySelector('.MuiSelect-select') as HTMLElement;
    fireEvent.mouseDown(rowsPerPageSelector);
    const option = screen.getAllByRole('option');
    fireEvent.click(option[0]);
    expect(handleRowsPerPageChange).toHaveBeenCalledWith(5);
  });

  it('calls onChangePage when page is changed', () => {
    const handlePageChange = jest.fn();
    const props: AclTablePaginationProps = {
      rowsPerPage: [5, 10, 15],
      defaultRowsPerPage: 10,
      totalNumberOfRows: 50,
      onChangePage: handlePageChange,
    };
    render(<AclTablePagination {...props} />);
    const nextPageButton = screen.getByLabelText('Go to next page');
    fireEvent.click(nextPageButton);
    expect(handlePageChange).toHaveBeenCalledWith(2);
  });

  it('renders custom icons for previous and next buttons', () => {
    const props: AclTablePaginationProps = {
      rowsPerPage: [5, 10, 15],
      defaultRowsPerPage: 10,
      totalNumberOfRows: 50,
    };
    render(<AclTablePagination {...props} />);
    const previousIcon = screen.getByTestId('ArrowBackIcon');
    const nextIcon = screen.getByTestId('ArrowForwardIcon');
    expect(previousIcon).toBeInTheDocument();
    expect(nextIcon).toBeInTheDocument();
  });

  it('defaults to the provided defaultRowsPerPage value', () => {
    const props: AclTablePaginationProps = {
      rowsPerPage: [5, 10, 15],
      defaultRowsPerPage: 15,
      totalNumberOfRows: 50,
    };
    render(<AclTablePagination {...props} />);
    const rowsPerPageSelector = screen.getByText('15');
    expect(rowsPerPageSelector).toBeInTheDocument();
  });

  it('calculates total pages correctly based on rowsPerPage and totalNumberOfRows', () => {
    const props: AclTablePaginationProps = {
      rowsPerPage: [5, 10, 15],
      defaultRowsPerPage: 10,
      totalNumberOfRows: 45,
    };
    render(<AclTablePagination {...props} />);
    const pagination = screen.getByRole('navigation');
    const totalPages = pagination.querySelectorAll('button').length - 2; // Exclude next and previous buttons
    expect(totalPages).toBe(5);
  });
});
