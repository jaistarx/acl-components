import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import ProductAdminMeasureForm from '.';
import { MeasureType } from '@/redux/measure';
import useAppDispatch from '@/utils/hooks/app-dispatch';
import useAppSelector from '@/utils/hooks/app-selector';
import { fetchLookupData } from '@/redux/lookup';
import { renderTestingComponent } from '@/utils/common/helper';

jest.mock('@/utils/hooks/app-dispatch', () => jest.fn());
jest.mock('@/utils/hooks/app-selector', () => jest.fn());
jest.mock('@/redux/lookup', () => ({
  fetchLookupData: jest.fn(),
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

describe('ProductAdminMeasureForm', () => {
  let measure: MeasureType;
  const mockDispatch = jest.fn();

  beforeEach(() => {
    measure = {
      measureId: 1,
      measureCode: 'M001',
      measureName: 'Sample Measure',
      categoryName: 'Category 1',
      abbriviation: 'SM',
      measureYear: '2024',
      weightCategoryId: 1,
      correlation: 0.5,
      weighingCategoryId: 2,
      startDataFrame: '2024-01-01',
      endDataFrame: '2024-12-31',
      lookupMapping: [{ lookupMappingId: 1, lookupId: 1, measureId: 1 }],
      measureThreshold: [
        { thresholdId: 1, measureId: 1, starRating: '1 star', thresholdValue: 50, OrganizationType: 'Type 1' },
      ],
    };
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);

    (useAppSelector as jest.Mock).mockReturnValue({
      data: { actionPayload: [] },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    renderTestingComponent(<ProductAdminMeasureForm readonly={false} measure={measure} />);
    expect(screen.getByTestId('category')).toBeInTheDocument();
  });
  it('handles input changes', () => {
    const onhandleInputChange = jest.fn();
    renderTestingComponent(
      <ProductAdminMeasureForm readonly={false} measure={measure} handleInputChange={onhandleInputChange} />,
    );
    const input = screen.getByTestId('measureCode');
    fireEvent.change(input, { target: { value: 'M002' } });
    expect(onhandleInputChange).toHaveBeenCalledWith('measureCode', 'M002' );
  });
  it('handles input changes undefined case', () => {
    const onhandleInputChange = jest.fn();
    renderTestingComponent(
      <ProductAdminMeasureForm readonly={false} measure={measure} handleInputChange={onhandleInputChange} />,
    );
    const input = screen.getByTestId('measureCode');
    fireEvent.change(input, { target: { value: undefined } });
    expect(onhandleInputChange).not.toHaveBeenCalled();
  });
  it('calls handleDropdownChange with the correct arguments when dropdown changes', () => {
    const mockHandleDropdownChange = jest.fn();
    renderTestingComponent(
      <ProductAdminMeasureForm measure={null} readonly={false} handleDropdownChange={mockHandleDropdownChange} />,
    );
    const dropdown = screen.getByTestId('category');
    fireEvent.change(dropdown, { target: { value: JSON.stringify({ id: '4', value: 'New Category' }) } });
    expect(mockHandleDropdownChange).toHaveBeenCalled();
  });

  it('calls handleDropdownChange with correct arguments when weighing category changes', () => {
    const mockHandleDropdownChange = jest.fn();
    renderTestingComponent(
      <ProductAdminMeasureForm measure={null} readonly={false} handleDropdownChange={mockHandleDropdownChange} />,
    );
    const dropdown = screen.getByTestId('weighingCategory');
    fireEvent.change(dropdown, { target: { value: JSON.stringify({ id: '90', value: 'New weighing category-3' }) } });
    expect(mockHandleDropdownChange).toHaveBeenCalled();
  });
  it('calls handleDropdownChangeMultiple with the correct arguments when multi select dropdown changes', () => {
    const mockHandleDropdownChangeMultiple = jest.fn();
    renderTestingComponent(
      <ProductAdminMeasureForm
        measure={null}
        readonly={false}
        handleDropdownChangeMultiple={mockHandleDropdownChangeMultiple}
      />,
    );
    const dropdown = screen.getByTestId('reportingRequirements');
    fireEvent.change(dropdown, { target: { value: JSON.stringify([{ id: '4', value: 'New value' }]) } });
    expect(mockHandleDropdownChangeMultiple).toHaveBeenCalled();
  });
  it('handles date changes', () => {
    const handleInputDateChange = jest.fn();
    renderTestingComponent(
      <ProductAdminMeasureForm readonly={false} measure={measure} handleInputDateChange={handleInputDateChange} />,
    );
    const dateInput = screen.getByTestId('startDataFrame');
    fireEvent.change(dateInput, { target: { value: '2024-05-01' } });
    expect(handleInputDateChange).toHaveBeenCalledWith('startDataFrame',  new Date("2024-05-01T00:00:00.000Z"));
  });

  it('calls handleThresholdChange with the correct arguments when theshold changes', () => {
    const mockHandleThresholdChange = jest.fn();
    renderTestingComponent(
      <ProductAdminMeasureForm
        measure={null}
        readonly={false}
        handleThresholdChange={mockHandleThresholdChange}
      />,
    );
    const input = screen.getByTestId('threshold-1');
    fireEvent.change(input, { target: { value: 20 } });
    expect(mockHandleThresholdChange).toHaveBeenCalled();
  });
 
});
