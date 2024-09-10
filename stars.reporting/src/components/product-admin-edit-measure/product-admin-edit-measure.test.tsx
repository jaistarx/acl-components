import { postMeasureData, updateMeasureData } from '@/redux/measure';
import { renderTestingComponent } from '@/utils/common/helper';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ProductAdminEditMeasure from '.';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn(),
}));

const mockPostMeasureData = jest.fn() as unknown as jest.MockedFunction<typeof postMeasureData>;

jest.mock('@/redux/measure', () => ({
  postMeasureData: jest.fn(),
  updateMeasureData: jest.fn(),
}));

const mockEnqueueSnackbar = jest.fn();

jest.mock('@acl/ui', () => ({
  ...jest.requireActual('@acl/ui'),
  AclButton: ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
    <button onClick={onClick}>{children}</button>
  ),

  AclModal: ({ children, openModal }: { children: React.ReactNode; openModal: boolean }) =>
    openModal ? <div>{children}</div> : null,

  useAclSnackbar: () => ({ enqueueSnackbar: mockEnqueueSnackbar }),
}));

jest.mock('@acl/ui', () => ({
  ...jest.requireActual('@acl/ui'),
  useAclSnackbar: () => ({ enqueueSnackbar: mockEnqueueSnackbar }),
}));
jest.mock('@acl/ui/components/aclDropdownV2', () => ({
  __esModule: true,

  default: ({ onChange, ...props }: any) => (
    <select data-testid={props.name} onChange={(e) => onChange({ target: { value: e.target.value } })}>
      {props.options.map((option: any) => (
        <option key={option.id} value={JSON.stringify(option)}>
          {option.value}
        </option>
      ))}
    </select>
  ),
}));
jest.mock('@acl/ui/components/aclInput', () => ({
  __esModule: true,

  default: ({ onChange, value, ...props }: any) => (
    <input data-testid={props.name} value={value} onChange={(e) => onChange(e)} />
  ),
}));
jest.mock('@acl/ui/components/aclDatepicker/aclDatepicker', () => ({
  __esModule: true,

  default: ({ onChange, onAccept, value, ...props }: any) => (
    <input
      type="date"
      data-testid={props.name}
      value={value ? value.toISOString().substr(0, 10) : ''}
      onChange={(e) => onAccept(e.target.value ? new Date(e.target.value) : null)}
    />
  ),
}));

describe('ProductAdminEditMeasure', () => {
  const defaultProps = {
    isOpen: true,
    isEdit: false,
    onClose: jest.fn(),
    measure: {
      measureId: 1,
      measureCode: '001',
      measureName: 'Test Measure',
      categoryName: 'Test Category',
      abbriviation: 'TM',
      measureYear: '2024',
      weightCategoryId: 1,
      correlation: 0.9,
      weighingCategoryId: 1,
      startDataFrame: '2024-01-02',
      endDataFrame: '2024-12-31',
      lookupMapping: [],
      measureThreshold: [
        {
          thresholdId: 0,
          measureId: 1,
          starRating: '1 star',
          thresholdValue: 30,
          OrganizationType: '',
        },
        {
          thresholdId: 0,
          measureId: 1,
          starRating: '2 star',
          thresholdValue: 40,
          OrganizationType: '',
        },
        {
          thresholdId: 0,
          measureId: 1,
          starRating: '3 star',
          thresholdValue: 50,
          OrganizationType: '',
        },
        {
          thresholdId: 0,
          measureId: 1,
          starRating: '4 star',
          thresholdValue: 60,
          OrganizationType: '',
        },
        {
          thresholdId: 0,
          measureId: 1,
          starRating: '5 star',
          thresholdValue: 80,
          OrganizationType: '',
        },
      ],
    },
  };

  it('should render the component and display the correct title', () => {
    renderTestingComponent(<ProductAdminEditMeasure {...defaultProps} />);
    expect(screen.getByText('Add Measure')).toBeInTheDocument();
  });

  it('should call dispatch when save button is clicked', async () => {
    const mockUnwrap = jest.fn().mockResolvedValue({});
    const mockPostMeasureData = jest.fn().mockResolvedValue({
      unwrap: mockUnwrap,
    });
    (postMeasureData as unknown as jest.Mock).mockImplementation(mockPostMeasureData);
    renderTestingComponent(<ProductAdminEditMeasure {...defaultProps} />);
    const saveButton = screen.getByText('Save');
    fireEvent.click(saveButton);
    await waitFor(() => {
      expect(mockPostMeasureData).toHaveBeenCalledWith(defaultProps.measure);
    });
  });

  it('should call dispatch with updated measure when update button is clicked', async () => {
    const mockUnwrap = jest.fn().mockResolvedValue({});
    const mockUpdateMeasureData = jest.fn().mockResolvedValue({
      unwrap: mockUnwrap,
    });
    (updateMeasureData as unknown as jest.Mock).mockImplementation(mockUpdateMeasureData);
    const editProps = { ...defaultProps, isEdit: true };
    const mockStore = configureMockStore();
    const store = mockStore({
      lookup: {
        data: {
          actionPayload: [],
          categoryLookup: [{ id: '7', value: 'HEDIS' }],
        },
      },
      measure: {},
    });
    renderTestingComponent(
      <Provider store={store}>
        <ProductAdminEditMeasure {...editProps} />
      </Provider>,
    );
    const updateButton = screen.getByText('Update');
    fireEvent.click(updateButton);

    await waitFor(() => {
      expect(mockUpdateMeasureData).toHaveBeenCalledWith(editProps.measure);
    });
  });

  it('should update state when handleInputChange is called', () => {
    renderTestingComponent(<ProductAdminEditMeasure {...defaultProps} />);
    const testValue = 'New Measure code';
    const input = screen.getByTestId('measureCode');
    fireEvent.change(input, { target: { value: testValue } });
    expect(screen.getByDisplayValue(testValue)).toBeInTheDocument();
  });

  it('should update state when handleInputDateChange is called', () => {
    const mockStore = configureMockStore();
    const store = mockStore({
      lookup: {
        data: {
          actionPayload: [],
          categoryLookup: [{ id: '7', value: 'HEDIS' }],
        },
      },
    });
    renderTestingComponent(
      <Provider store={store}>
        <ProductAdminEditMeasure {...defaultProps} />
      </Provider>,
    );
    const testDate = '2024-01-01';
    const dateInput = screen.getByTestId('startDataFrame');
    fireEvent.change(dateInput, { target: { value: testDate } });
    expect(screen.getByDisplayValue(testDate)).toBeInTheDocument();
  });

  it('should update state when handleDropdownChange is called', () => {
    const mockStore = configureMockStore();
    const store = mockStore({
      lookup: {
        data: {
          actionPayload: [],
          categoryLookup: [{ id: '7', value: 'HEDIS' }],
        },
      },
    });
    renderTestingComponent(
      <Provider store={store}>
        <ProductAdminEditMeasure {...defaultProps} />
      </Provider>,
    );
    const testValue = JSON.stringify({ id: '7', value: 'HEDIS' });
    const dropdown = screen.getByTestId('category');
    fireEvent.change(dropdown, { target: { value: testValue } });
    expect(screen.getByDisplayValue('HEDIS')).toBeInTheDocument();
  });

  it('should update state when handleDropdownChangeMultiple is called', async () => {
    const mockStore = configureMockStore();
    const store = mockStore({
      lookup: {
        data: {
          actionPayload: [],
          reportingRequirementsLookup: [{ id: '4', value: 'New value' }],
        },
      },
    });
    renderTestingComponent(
      <Provider store={store}>
        <ProductAdminEditMeasure {...defaultProps} />
      </Provider>,
    );
    const testValues: { id: string; value: string }[] = [{ id: '4', value: 'New value' }];
    const dropdown = screen.getByTestId('reportingRequirements');
    fireEvent.change(dropdown, { target: { value: testValues } });
    testValues.forEach(async (value: { id: string; value: string }) => {
      expect(await screen.findByDisplayValue(value.value)).toBeInTheDocument();
    });
  });

  it('should call onClose when cancel button is clicked', () => {
    renderTestingComponent(<ProductAdminEditMeasure {...defaultProps} />);
    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it('updates measure thresholds correctly on handleThresholdChange', () => {
    const mockStore = configureMockStore();
    const store = mockStore({
      lookup: {
        data: {
          actionPayload: [],
          categoryLookup: [],
        },
      },
    });
    const { rerender } = renderTestingComponent(
      <Provider store={store}>
        <ProductAdminEditMeasure {...defaultProps} />
      </Provider>,
    );
    const initialMeasure = {
      measureId: 0,
      measureCode: '001',
      measureName: 'Test Measure',
      categoryName: 'Test Category',
      abbriviation: 'TM',
      measureYear: '2024',
      weightCategoryId: 1,
      correlation: 0.9,
      weighingCategoryId: 1,
      startDataFrame: '2024-01-01',
      endDataFrame: '2024-12-31',
      lookupMapping: [],
      measureThreshold: [
        {
          thresholdId: 0,
          measureId: 0,
          starRating: '1 star',
          thresholdValue: 0,
          OrganizationType: '',
        },
        {
          thresholdId: 0,
          measureId: 0,
          starRating: '2 star',
          thresholdValue: 0,
          OrganizationType: '',
        },
        {
          thresholdId: 0,
          measureId: 0,
          starRating: '3 star',
          thresholdValue: 0,
          OrganizationType: '',
        },
        {
          thresholdId: 0,
          measureId: 0,
          starRating: '4 star',
          thresholdValue: 0,
          OrganizationType: '',
        },
        {
          thresholdId: 0,
          measureId: 0,
          starRating: '5 star',
          thresholdValue: 0,
          OrganizationType: '',
        },
      ],
    };
    const changedprops = { ...defaultProps, measure: initialMeasure };

    rerender(
      <Provider store={store}>
        <ProductAdminEditMeasure {...changedprops} />
      </Provider>,
    );
    const thresholdInput = screen.getByTestId('threshold-2');
    fireEvent.change(thresholdInput, { target: { value: 50 } });
    const updatedThreshold = defaultProps.measure.measureThreshold[2].thresholdValue;
    expect(updatedThreshold).toBe(50);
    expect(screen.getByDisplayValue('50')).toBeInTheDocument();
  });
});
