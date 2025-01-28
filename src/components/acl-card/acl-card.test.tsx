import { render, screen } from '@testing-library/react';
import React from 'react';
import { AclCard } from '../..';

describe('AclCard', () => {
  it('should render children inside the Card', () => {
    const childrenText = 'Test Child Content';
    render(<AclCard>{childrenText}</AclCard>);
    expect(screen.getByText(childrenText)).toBeInTheDocument();
  });

  it('should apply default raised prop as false', () => {
    const { container } = render(<AclCard>Test Card</AclCard>);
    const cardElement = container.querySelector('.MuiCard-root');
    expect(cardElement).not.toHaveClass('MuiPaper-elevation8');
  });

  it('should accept and pass other props like raised', () => {
    const raised = true;
    const { container } = render(<AclCard raised={raised}>Test Card with Raised</AclCard>);
    const cardElement = container.querySelector('.MuiCard-root');
    expect(cardElement).toHaveClass('MuiPaper-elevation8');
  });

  it('should render the Card with AclThemeProvider theme', () => {
    const childrenText = 'Test with Theme';
    render(<AclCard>{childrenText}</AclCard>);
    const cardElement = screen.getByText(childrenText);
    expect(cardElement).toBeInTheDocument();
  });
});
