
import React from 'react';
import { IconProps } from '../src/types';

const LifeBuoy: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M4.93 4.93 9.17 9.17"/><path d="M14.83 14.83 19.07 19.07"/><path d="M14.83 9.17 19.07 4.93"/><path d="M14.83 9.17 18.36 5.64"/><path d="M4.93 19.07 9.17 14.83"/></svg>
    </i>
	);
};

export default LifeBuoy;
