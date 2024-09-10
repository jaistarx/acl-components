import { renderTestingComponent } from '@/utils/common/helper';
import { screen } from '@testing-library/react';
import React from 'react';
import ClientSelection from './index';

describe('Client Selection', () => {
  it('should renders ClientSelection', () => {
    renderTestingComponent(<ClientSelection />);

    const selectClienttext = screen.getByText(/Select client/);
    expect(selectClienttext).toBeInTheDocument();
  });
});
