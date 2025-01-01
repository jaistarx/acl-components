import React from 'react';
import CancelSVG from '../assets/images/cancel-icon.svg';

const CancelIcon = (props?: Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'>) => (
  <img style={{ height: '20px', width: '20px' }} {...props} src={CancelSVG} alt="cancel-icon" />
);

export default CancelIcon;
