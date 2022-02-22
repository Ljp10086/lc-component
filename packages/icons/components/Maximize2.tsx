
import React from 'react';
import { IconProps } from '../src/types';

const Maximize2: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 3 21 3 21 9"/><path d="M9 21 3 21 3 15"/><path d="M21 3 14 10"/><path d="M3 21 10 14"/></svg>
    </i>
	);
};

export default Maximize2;
