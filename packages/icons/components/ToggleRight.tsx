
import React from 'react';
import { IconProps } from '../src/types';

const ToggleRight: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><rect width="22" height="14" x="1" y="5" rx="7" ry="7"/><circle cx="16" cy="12" r="3"/></svg>
    </i>
	);
};

export default ToggleRight;
