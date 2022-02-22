
import React from 'react';
import { IconProps } from '../src/types';

const Monitor: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="3" rx="2" ry="2"/><path d="M8 21 16 21"/><path d="M12 17 12 21"/></svg>
    </i>
	);
};

export default Monitor;
