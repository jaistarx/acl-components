import { IDictionary } from '../types';

export const stringifyObjectValues = (object: IDictionary<any>): string => {
  return String(Object.values(object).join('-')); // Simple hashing using values
};

export const convertBytes = (bytes?: number | null): string => {
  if (bytes === 0) return '0 KB';
  if (!bytes) return 'Value not provided';

  const KB = 1024;
  const MB = KB * 1024;
  const GB = MB * 1024;

  if (bytes >= GB) {
    return `${(bytes / GB).toFixed(2)} GB`;
  } else if (bytes >= MB) {
    return `${(bytes / MB).toFixed(2)} MB`;
  } else {
    return `${(bytes / KB).toFixed(2)} KB`;
  }
};
