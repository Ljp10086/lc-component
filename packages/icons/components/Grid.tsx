
import React from 'react';
import { IconProps } from '../src/types';

const Grid: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 3H10V10H3z"/><path d="M14 3H21V10H14z"/><path d="M14 14H21V21H14z"/><path d="M3 14H10V21H3z"/></svg>
    </i>
	);
};

export default Grid;
