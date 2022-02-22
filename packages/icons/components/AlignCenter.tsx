
import React from 'react';
import { IconProps } from '../src/types';

const AlignCenter: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 10 6 10"/><path d="M21 6 3 6"/><path d="M21 14 3 14"/><path d="M18 18 6 18"/></svg>
    </i>
	);
};

export default AlignCenter;
