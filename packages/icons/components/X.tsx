
import React from 'react';
import { IconProps } from '../src/types';

const X: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 6 6 18"/><path d="M6 6 18 18"/></svg>
    </i>
	);
};

export default X;
