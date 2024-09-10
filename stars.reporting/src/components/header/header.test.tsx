import { renderTestingComponent } from '@/utils/common/helper';
import { screen } from '@testing-library/dom';
import React from 'react';
import Header from './index';

describe('Header', () => {
  it('it renders Header', () => {
    renderTestingComponent(<Header />);

    const imgElements = screen.getAllByRole('img');
    expect(imgElements[0]).toBeInTheDocument();
  });
});
