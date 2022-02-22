
import React from 'react';
import { IconProps } from '../src/types';

const XSquare: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M9 9 15 15"/><path d="M15 9 9 15"/></svg>
    </i>
	);
};

export default XSquare;
