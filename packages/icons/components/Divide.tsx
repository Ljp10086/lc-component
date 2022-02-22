
import React from 'react';
import { IconProps } from '../src/types';

const Divide: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="6" r="2"/><path d="M5 12 19 12"/><circle cx="12" cy="18" r="2"/></svg>
    </i>
	);
};

export default Divide;
