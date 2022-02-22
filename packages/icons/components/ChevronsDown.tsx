
import React from 'react';
import { IconProps } from '../src/types';

const ChevronsDown: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M7 13 12 18 17 13"/><path d="M7 6 12 11 17 6"/></svg>
    </i>
	);
};

export default ChevronsDown;
