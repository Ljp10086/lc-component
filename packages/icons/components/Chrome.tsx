
import React from 'react';
import { IconProps } from '../src/types';

const Chrome: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M21.17 8 12 8"/><path d="M3.95 6.06 8.54 14"/><path d="M10.88 21.94 15.46 14"/></svg>
    </i>
	);
};

export default Chrome;
