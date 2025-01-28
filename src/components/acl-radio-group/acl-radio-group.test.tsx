import { render, screen } from '@testing-library/react';
import React from 'react';
import { AclRadioGroup } from '../..';

describe('AclRadioGroup', () => {
  it('renders RadioGroup with children', () => {
    render(
      <AclRadioGroup name="test-group">
        <div>Radio Option 1</div>
        <div>Radio Option 2</div>
      </AclRadioGroup>,
    );
    expect(screen.getByText('Radio Option 1')).toBeInTheDocument();
    expect(screen.getByText('Radio Option 2')).toBeInTheDocument();
  });
});
