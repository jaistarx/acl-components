import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { AclIconButton } from '../..';

describe('AclIconButton', () => {
  it('renders IconButton with children', () => {
    render(
      <AclIconButton>
        <span>Test Content</span>
      </AclIconButton>,
    );
    const content = screen.getByText('Test Content');
    expect(content).toBeInTheDocument();
  });

  it('applies additional props to IconButton', () => {
    const handleClick = jest.fn();
    render(
      <AclIconButton data-testid="icon-button" onClick={handleClick}>
        <span>Click Me</span>
      </AclIconButton>,
    );
    const button = screen.getByTestId('icon-button');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders with the default ThemeProvider', () => {
    const { container } = render(
      <AclIconButton>
        <span>Default Theme</span>
      </AclIconButton>,
    );
    const themeProvider = container.querySelector('.MuiIconButton-root');
    expect(themeProvider).toBeInTheDocument();
  });
});
