
import React from 'react';
import { IconProps } from '../src/types';

const Archive: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 8 21 21 3 21 3 8"/><path d="M1 3H23V8H1z"/><path d="M10 12 14 12"/></svg>
    </i>
	);
};

export default Archive;
