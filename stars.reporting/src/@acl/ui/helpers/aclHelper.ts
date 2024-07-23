import { IAclRootProperty } from "../types/aclCore";

export const getAclRootProperty = (
  property: keyof IAclRootProperty
): string => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(property)
    .trim();
};
