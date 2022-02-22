
import React from 'react';
import { IconProps } from '../src/types';

const ChevronsLeft: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M11 17 6 12 11 7"/><path d="M18 17 13 12 18 7"/></svg>
    </i>
	);
};

export default ChevronsLeft;
