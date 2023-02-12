import React from 'react';
import { SvgProps } from 'react-native-svg';

//icon SVG
import Back from './back.svg';
import CalenderToday from './calendar.svg';
import CalenderSchedule from './calendar-schedule.svg';
import CalenderCheck from './calendar-check.svg';
import CalenderFill from './calendar-fill.svg';
import AddCricle from './plus-circle-fill.svg';

interface ISizeProps {
  size?: number;
}
export const BackIcon = (props: SvgProps) => <Back {...props} />;
export const CalenderTodayIcon = (props: SvgProps) => (
  <CalenderToday {...props} />
);
export const CalenderScheduleIcon = (props: SvgProps) => (
  <CalenderSchedule {...props} />
);
export const CalenderCheckIcon = (props: SvgProps) => (
  <CalenderCheck {...props} />
);
export const CalenderFillIcon = (props: SvgProps) => (
  <CalenderFill {...props} />
);
export const AddCricleIcon = (props: SvgProps) => <AddCricle {...props} />;
