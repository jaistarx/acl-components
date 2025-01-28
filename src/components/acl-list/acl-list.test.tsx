import { render, screen } from '@testing-library/react';
import React from 'react';
import { AclList } from '../..';
import { AclListItem } from '..';

describe('AclList', () => {
  it('renders List with children', () => {
    render(
      <AclList>
        <AclListItem>Test Item</AclListItem>
      </AclList>,
    );
    const item = screen.getByText('Test Item');
    expect(item).toBeInTheDocument();
  });

  it('applies default props to List', () => {
    const { container } = render(
      <AclList>
        <AclListItem>Default Prop Test</AclListItem>
      </AclList>,
    );
    const list = container.querySelector('.MuiList-root');
    expect(list).toBeInTheDocument();
  });

  it('passes additional props to List', () => {
    const { container } = render(
      <AclList data-testid="custom-list">
        <AclListItem>Custom Prop Test</AclListItem>
      </AclList>,
    );
    const list = container.querySelector('[data-testid="custom-list"]');
    expect(list).toBeInTheDocument();
  });
});
