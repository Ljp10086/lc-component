
import React from 'react';
import { IconProps } from '../src/types';

const Compass: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76z"/></svg>
    </i>
	);
};

export default Compass;
