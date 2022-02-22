
import React from 'react';
import { IconProps } from '../src/types';

const Navigation: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 11 22 2 13 21 11 13 3 11z"/></svg>
    </i>
	);
};

export default Navigation;
