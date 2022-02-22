
import React from 'react';
import { IconProps } from '../src/types';

const Filter: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3z"/></svg>
    </i>
	);
};

export default Filter;
