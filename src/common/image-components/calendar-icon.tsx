import React from 'react';
import CalendarSVG from '../assets/images/calendar-icon.svg';

const CalendarIcon = (props?: Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'>) => (
  <img style={{ height: '20px', width: '20px' }} {...props} src={CalendarSVG} alt="calendar-icon" />
);

export default CalendarIcon;
