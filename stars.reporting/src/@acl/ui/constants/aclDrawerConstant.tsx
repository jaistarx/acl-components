import { IAclDrawerIconPosition } from '../types/aclDrawerEntity';

export const ICON_CONTAINER = (iconPosition: IAclDrawerIconPosition) => {
  return {
    position: 'absolute',
    zIndex: 1201,
    ...iconPosition,
  };
};
