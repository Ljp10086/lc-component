
import React from 'react';
import { IconProps } from '../src/types';

const Minimize2: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 14 10 14 10 20"/><path d="M20 10 14 10 14 4"/><path d="M14 10 21 3"/><path d="M3 21 10 14"/></svg>
    </i>
	);
};

export default Minimize2;
