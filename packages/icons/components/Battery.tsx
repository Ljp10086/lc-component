
import React from 'react';
import { IconProps } from '../src/types';

const Battery: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><rect width="18" height="12" x="1" y="6" rx="2" ry="2"/><path d="M23 13 23 11"/></svg>
    </i>
	);
};

export default Battery;
