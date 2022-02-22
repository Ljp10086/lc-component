
import React from 'react';
import { IconProps } from '../src/types';

const ZoomIn: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21 16.65 16.65"/><path d="M11 8 11 14"/><path d="M8 11 14 11"/></svg>
    </i>
	);
};

export default ZoomIn;