
import React from 'react';
import { IconProps } from '../src/types';

const Sun: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1 12 3"/><path d="M12 21 12 23"/><path d="M4.22 4.22 5.64 5.64"/><path d="M18.36 18.36 19.78 19.78"/><path d="M1 12 3 12"/><path d="M21 12 23 12"/><path d="M4.22 19.78 5.64 18.36"/><path d="M18.36 5.64 19.78 4.22"/></svg>
    </i>
	);
};

export default Sun;
