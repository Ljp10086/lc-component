
import React from 'react';
import { IconProps } from '../src/types';

const XOctagon: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2z"/><path d="M15 9 9 15"/><path d="M9 9 15 15"/></svg>
    </i>
	);
};

export default XOctagon;
