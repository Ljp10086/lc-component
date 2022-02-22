
import React from 'react';
import { IconProps } from '../src/types';

const FastForward: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 19 22 12 13 5 13 19z"/><path d="M2 19 11 12 2 5 2 19z"/></svg>
    </i>
	);
};

export default FastForward;
