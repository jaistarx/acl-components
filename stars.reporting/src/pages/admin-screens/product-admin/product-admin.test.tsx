import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ProductAdmin from './index';

jest.mock('./index', () => () => <div>Mocked ProductAdminMeasure</div>);
jest.mock('@/components/product-admin-side-panel', () => () => <div>Mocked ProductAdminSidePanel</div>);
jest.mock('@/components/product-admin-edit-measure', () => () => <div>Mocked ProductAdminEditMeasure</div>);
jest.mock('@/utils/hooks/app-dispatch');
jest.mock('@/utils/hooks/app-selector');

const mockStore = configureStore();

const initialState = {
  measure: {
    data: [
      { measureId: 1, categoryName: 'Category1', measureCode: 'Code1', measureName: 'Measure1' },
      { measureId: 2, categoryName: 'Category2', measureCode: 'Code2', measureName: 'Measure2' },
    ],
    loading: false,
  },
};

describe('ProductAdmin', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
  });

  it('renders measure components based on selected category', () => {
    render(
      <Provider store={store}>
        <ProductAdmin />
      </Provider>,
    );
    expect(screen.getAllByText('Mocked ProductAdminMeasure').length).toBe(1);
  });
});
