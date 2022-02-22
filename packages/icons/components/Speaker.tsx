
import React from 'react';
import { IconProps } from '../src/types';

const Speaker: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><circle cx="12" cy="14" r="4"/><path d="M12 6 12.01 6"/></svg>
    </i>
	);
};

export default Speaker;
