
import React from 'react';
import { IconProps } from '../src/types';

const CloudDrizzle: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 19 8 21"/><path d="M8 13 8 15"/><path d="M16 19 16 21"/><path d="M16 13 16 15"/><path d="M12 21 12 23"/><path d="M12 15 12 17"/><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/></svg>
    </i>
	);
};

export default CloudDrizzle;
