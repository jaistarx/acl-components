import { MeasureType } from '@/redux/measure';
import { SyntheticEvent } from 'react';

export type ProductAdminMeasureProps = {
  expanded: boolean;
  onEditClick: () => void;
  onChange: (event: SyntheticEvent<Element, Event>, expanded: boolean) => void;
  measure: MeasureType;
  readOnly: boolean;
};
