
import React from 'react';
import { IconProps } from '../src/types';

const Shuffle: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 3 21 3 21 8"/><path d="M4 20 21 3"/><path d="M21 16 21 21 16 21"/><path d="M15 15 21 21"/><path d="M4 4 9 9"/></svg>
    </i>
	);
};

export default Shuffle;
