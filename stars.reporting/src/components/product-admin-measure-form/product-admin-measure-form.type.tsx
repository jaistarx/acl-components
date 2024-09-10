import { LookupItem } from '@/redux/lookup';
import { MeasureType } from '@/redux/measure';
import { SelectChangeEvent } from '@mui/material';

export type ProductAdminMeasureFormProps = {
  readonly: boolean;
  measure: MeasureType | null;
  defaultLookupValues?: {
    category: Option | undefined;
    subcategory: Option | undefined;
    weighingCategory: Option | undefined;
    domainType: Option | undefined;
    measureType: Option | undefined;
    generalTrend: Option | undefined;
  };
  reportingRequirements?: Option[] | undefined;
  onMeasureChange?: (measure: MeasureType) => void;
  handleInputChange?: (field: keyof MeasureType, value: string | number | undefined) => void;
  handleInputDateChange?: (field: keyof MeasureType, value: Date | null) => void;
  handleDropdownChange?: (field: string, value: SelectChangeEvent<string | string[]>) => void;
  handleDropdownChangeMultiple?: (field: string, event: SelectChangeEvent<string | string[]>) => void;
  handleThresholdChange?: (
    index: number,
    field: keyof MeasureType['measureThreshold'][number],
    value: string | number,
  ) => void;
};

export type MeasureThreshold = {
  thresholdId: number;
  measureId: number;
  starRating: string;
  thresholdValue: number;
  OrganizationType: string;
};

export type FormattedMeasureThreshold = {
  [starRating: string]: number;
};

export type Option = {
  id: string;
  value: string;
  [key: string | number]: string | number;
};

export type ProductAdminModalValues = {
  modalName: string;
  lookupName: string;
  lookupValue?: string;
  originalValues?: LookupItem;
};
