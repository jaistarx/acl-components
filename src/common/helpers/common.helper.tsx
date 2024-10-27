import { IDictionary } from '../types/common.type';

export const stringifyObjectValues = (object: IDictionary<any>): string => {
  return String(Object.values(object).join('-')); // Simple hashing using values
};
