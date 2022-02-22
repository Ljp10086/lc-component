
import React from 'react';
import { IconProps } from '../src/types';

const ArrowLeftCircle: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8 8 12 12 16"/><path d="M16 12 8 12"/></svg>
    </i>
	);
};

export default ArrowLeftCircle;
