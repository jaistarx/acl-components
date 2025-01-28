import { render, screen } from '@testing-library/react';
import React from 'react';
import { CalendarIcon, CancelIcon, LoaderIcon } from '../..';

describe('CalendarIcon', () => {
  it('should render the CalendarIcon with default props', () => {
    render(<CalendarIcon />);
    const icon = screen.getByAltText('calendar-icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveStyle('height: 20px');
    expect(icon).toHaveStyle('width: 20px');
  });

  it('should override default styles if passed in props', () => {
    render(<CalendarIcon style={{ height: '40px', width: '40px' }} />);
    const icon = screen.getByAltText('calendar-icon');
    expect(icon).toHaveStyle('height: 40px');
    expect(icon).toHaveStyle('width: 40px');
  });
});

describe('CancelIcon', () => {
  it('should render the CancelIcon with default props', () => {
    render(<CancelIcon />);
    const icon = screen.getByAltText('cancel-icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveStyle('height: 20px');
    expect(icon).toHaveStyle('width: 20px');
  });

  it('should override default styles if passed in props', () => {
    render(<CancelIcon style={{ height: '40px', width: '40px' }} />);
    const icon = screen.getByAltText('cancel-icon');
    expect(icon).toHaveStyle('height: 40px');
    expect(icon).toHaveStyle('width: 40px');
  });
});

describe('LoaderIcon', () => {
  it('should render the LoaderIcon with default props', () => {
    const { container } = render(<LoaderIcon />);
    const icon = container.querySelector('.MuiBox-root');
    const loader = container.querySelector('.MuiCircularProgress-root');
    expect(loader).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveStyle('padding: 0px 8px');
    expect(icon).toHaveStyle('display: flex');
    expect(icon).toHaveStyle('align-items: center');
    expect(icon).toHaveStyle('justify-content: center');
  });
});
