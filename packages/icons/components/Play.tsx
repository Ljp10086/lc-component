
import React from 'react';
import { IconProps } from '../src/types';

const Play: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 3 19 12 5 21 5 3z"/></svg>
    </i>
	);
};

export default Play;
