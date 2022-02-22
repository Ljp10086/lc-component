
import React from 'react';
import { IconProps } from '../src/types';

const SkipForward: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 4 15 12 5 20 5 4z"/><path d="M19 5 19 19"/></svg>
    </i>
	);
};

export default SkipForward;
