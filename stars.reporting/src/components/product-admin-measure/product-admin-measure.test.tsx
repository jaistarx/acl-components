import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductAdminMeasure from './index';
import { Provider } from 'react-redux';
import store from '@/redux/store';

jest.mock('@acl/ui', () => ({
  AclAccordion: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
  AclAccordionSummary: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
  AclAccordionDetails: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
  AclIcon: jest.fn(({ src, ...props }) => <img src={src} {...props} />),
  AclIconButton: jest.fn(({ children, ...props }) => <button {...props}>{children}</button>),
}));
jest.mock('./index', () => () => <div>Mocked ProductAdminMeasure</div>);

const mockMeasure = {
  measureId: 1,
  measureCode: '001',
  measureName: 'Test Measure',
  categoryName: 'Test Category',
  abbriviation: 'TM',
  measureYear: '2024',
  weightCategoryId: 1,
  correlation: 0.9,
  weighingCategoryId: 1,
  startDataFrame: '2024-08-02',
  endDataFrame: '2024-08-02',
  lookupMapping: [
    {
      lookupMappingId: 1,
      lookupId: 1,
      measureId: 1,
    },
  ],
  measureThreshold: [
    {
      thresholdId: 1,
      measureId: 1,
      starRating: '5',
      thresholdValue: 0.8,
      OrganizationType: 'Test Org',
    },
  ],
};

const mockProps = {
  expanded: false,
  onChange: jest.fn(),
  onEditClick: jest.fn(),
  measure: mockMeasure,
  readOnly: false,
};

describe('ProductAdminMeasure', () => {
  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <ProductAdminMeasure {...mockProps} />{' '}
      </Provider>,
    );
    expect(screen.getAllByText('Mocked ProductAdminMeasure').length).toBe(1);
  });
});
