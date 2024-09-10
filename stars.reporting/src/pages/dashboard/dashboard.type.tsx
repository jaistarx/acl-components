import { MeasureType } from '@/redux/measure';
import { FileProcessingData } from '@/redux/file';

export type FileRow = FileProcessingData;
export type MeasureRow = MeasureType;
export type RoleListItem = {
  className: string;
  roles: string[];
};
