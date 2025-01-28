import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  AclAccordion,
  AclAccordionDetails,
  AclAccordionDetailsProps,
  AclAccordionProps,
  AclAccordionSummary,
  AclAccordionSummaryProps,
} from '../..';

describe('AclAccordion', () => {
  it('renders children inside the Accordion', () => {
    const props: AclAccordionProps = {
      children: <div>Accordion Content</div>,
    };
    render(<AclAccordion {...props} />);
    const content = screen.getByText('Accordion Content');
    expect(content).toBeInTheDocument();
  });

  it('applies default disableGutters property', () => {
    const props: AclAccordionProps = {
      children: <div>Accordion Content</div>,
    };
    const { container } = render(<AclAccordion {...props} />);
    const accordion = container.querySelector('.MuiAccordion-root');
    expect(accordion).not.toHaveClass('MuiAccordion-gutters');
  });

  it('overrides disableGutters property when provided', () => {
    const props: AclAccordionProps = {
      children: <div>Accordion Content</div>,
      disableGutters: false,
    };
    const { container } = render(<AclAccordion {...props} />);
    const accordion = container.querySelector('.MuiAccordion-root');
    expect(accordion).toHaveClass('MuiAccordion-gutters');
  });

  it('renders with custom props', () => {
    const props: AclAccordionProps = {
      children: <div>Accordion Content</div>,
      expanded: true,
    };
    const { container } = render(<AclAccordion {...props} />);
    const accordion = container.querySelector('.MuiAccordion-root');
    expect(accordion).toHaveClass('Mui-expanded');
  });
});

describe('AclAccordionSummary', () => {
  it('renders with default expand icon when no expandIcon prop is provided', () => {
    const props: AclAccordionSummaryProps = {
      children: 'Accordion Summary Content',
    };
    render(<AclAccordionSummary {...props} />);
    const summary = screen.getByText('Accordion Summary Content');
    const defaultIcon = screen.getByTestId('KeyboardArrowDownIcon');
    expect(summary).toBeInTheDocument();
    expect(defaultIcon).toBeInTheDocument();
  });

  it('renders with custom expand icon when expandIcon prop is provided', () => {
    const CustomIcon = () => <div data-testid="custom-icon">Custom Icon</div>;
    const props: AclAccordionSummaryProps = {
      children: 'Accordion Summary Content',
      expandIcon: <CustomIcon />,
    };
    render(<AclAccordionSummary {...props} />);
    const summary = screen.getByText('Accordion Summary Content');
    const customIcon = screen.getByTestId('custom-icon');
    expect(summary).toBeInTheDocument();
    expect(customIcon).toBeInTheDocument();
  });

  it('applies additional props correctly', () => {
    const props: AclAccordionSummaryProps = {
      children: 'Accordion Summary Content',
      id: 'accordion-summary',
      'aria-controls': 'accordion-content',
    };
    const { container } = render(<AclAccordionSummary {...props} />);
    const summary = container.querySelector('.MuiAccordionSummary-root');
    expect(summary).toHaveAttribute('id', 'accordion-summary');
    expect(summary).toHaveAttribute('aria-controls', 'accordion-content');
  });

  it('renders children content correctly', () => {
    const props: AclAccordionSummaryProps = {
      children: <div data-testid="child-content">Child Content</div>,
    };
    render(<AclAccordionSummary {...props} />);
    const childContent = screen.getByTestId('child-content');
    expect(childContent).toBeInTheDocument();
  });
});

describe('AclAccordionDetails', () => {
  it('renders children content correctly', () => {
    const props: AclAccordionDetailsProps = {
      children: <div data-testid="child-content">Child Content</div>,
    };
    render(<AclAccordionDetails {...props} />);
    const childContent = screen.getByTestId('child-content');
    expect(childContent).toBeInTheDocument();
  });

  it('applies additional props correctly', () => {
    const props: AclAccordionDetailsProps = {
      children: 'Accordion Details Content',
      id: 'accordion-details',
    };
    render(<AclAccordionDetails {...props} />);
    const details = screen.getByText('Accordion Details Content');
    expect(details).toHaveAttribute('id', 'accordion-details');
  });

  it('renders without crashing when no children are provided', () => {
    const props: AclAccordionDetailsProps = {};
    const { container } = render(<AclAccordionDetails {...props} />);
    const details = container.querySelector('.MuiAccordionDetails-root');
    expect(details).toBeInTheDocument();
  });
});
