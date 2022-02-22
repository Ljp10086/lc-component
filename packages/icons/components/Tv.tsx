
import React from 'react';
import { IconProps } from '../src/types';

const Tv: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="15" x="2" y="7" rx="2" ry="2"/><path d="M17 2 12 7 7 2"/></svg>
    </i>
	);
};

export default Tv;
