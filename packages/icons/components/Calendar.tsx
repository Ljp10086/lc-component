
import React from 'react';
import { IconProps } from '../src/types';

const Calendar: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><path d="M16 2 16 6"/><path d="M8 2 8 6"/><path d="M3 10 21 10"/></svg>
    </i>
	);
};

export default Calendar;
