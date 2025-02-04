import { render, screen } from '@testing-library/react';
import React from 'react';
import { AclGlobalProvider } from '../..';

describe('AclGlobalProvider', () => {
  it('renders children within the providers', () => {
    render(
      <AclGlobalProvider>
        <div data-testid="child-element">Test Child</div>
      </AclGlobalProvider>,
    );
    const childElement = screen.getByTestId('child-element');
    expect(childElement).toBeInTheDocument();
    expect(childElement).toHaveTextContent('Test Child');
  });
});
