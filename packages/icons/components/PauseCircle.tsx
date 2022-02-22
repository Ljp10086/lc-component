
import React from 'react';
import { IconProps } from '../src/types';

const PauseCircle: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M10 15 10 9"/><path d="M14 15 14 9"/></svg>
    </i>
	);
};

export default PauseCircle;
