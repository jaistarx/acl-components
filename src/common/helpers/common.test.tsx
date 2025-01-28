import { convertBytes, stringifyObjectValues } from '../..';

describe('common.helper', () => {
  describe('stringifyObjectValues', () => {
    it('should return an empty string for null or undefined object', () => {
      expect(stringifyObjectValues(null)).toBe('');
      expect(stringifyObjectValues(undefined)).toBe('');
    });

    it('should return concatenated values as string', () => {
      const obj = { a: 1, b: 'test', c: true };
      expect(stringifyObjectValues(obj)).toBe('1-test-true');
    });

    it('should handle empty objects', () => {
      expect(stringifyObjectValues({})).toBe('');
    });
  });

  describe('convertBytes', () => {
    it('should return "0 KB" for 0 bytes', () => {
      expect(convertBytes(0)).toBe('0 KB');
    });

    it('should return "Value not provided" for undefined or null bytes', () => {
      expect(convertBytes(undefined)).toBe('Value not provided');
      expect(convertBytes(null)).toBe('Value not provided');
    });

    it('should convert bytes to KB', () => {
      expect(convertBytes(1024)).toBe('1.00 KB');
    });

    it('should convert bytes to MB', () => {
      expect(convertBytes(1024 * 1024)).toBe('1.00 MB');
    });

    it('should convert bytes to GB', () => {
      expect(convertBytes(1024 * 1024 * 1024)).toBe('1.00 GB');
    });

    it('should handle large numbers', () => {
      expect(convertBytes(1024 * 1024 * 1024 * 10)).toBe('10.00 GB');
    });
  });
});
