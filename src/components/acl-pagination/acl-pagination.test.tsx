import { render, screen } from '@testing-library/react';
import React from 'react';
import { AclPagination } from '../..';

describe('AclPagination', () => {
  it('renders Pagination component with custom icons', () => {
    render(<AclPagination count={10} page={1} />);
    const pagination = screen.getByRole('navigation');
    expect(pagination).toBeInTheDocument();
  });

  it('renders previous and next icons', () => {
    render(<AclPagination count={10} page={1} />);
    const previousIcon = screen.getByTestId('ArrowBackIcon');
    const nextIcon = screen.getByTestId('ArrowForwardIcon');
    expect(previousIcon).toBeInTheDocument();
    expect(nextIcon).toBeInTheDocument();
  });

  it('passes additional props to Pagination', () => {
    render(<AclPagination count={10} page={2} data-testid="custom-pagination" />);
    const pagination = screen.getByTestId('custom-pagination');
    expect(pagination).toBeInTheDocument();
    expect(pagination).toHaveAttribute('aria-label', 'pagination navigation');
  });

  it('renders the selected page', () => {
    render(<AclPagination count={10} page={3} />);
    const selectedPage = screen.getByText('3');
    expect(selectedPage).toHaveClass('Mui-selected');
  });
});
