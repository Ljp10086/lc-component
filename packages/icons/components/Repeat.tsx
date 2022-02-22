
import React from 'react';
import { IconProps } from '../src/types';

const Repeat: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
    </i>
	);
};

export default Repeat;
