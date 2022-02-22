
import React from 'react';
import { IconProps } from '../src/types';

const ChevronLeft: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 18 9 12 15 6"/></svg>
    </i>
	);
};

export default ChevronLeft;
