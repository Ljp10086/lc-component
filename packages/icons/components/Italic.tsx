
import React from 'react';
import { IconProps } from '../src/types';

const Italic: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 4 10 4"/><path d="M14 20 5 20"/><path d="M15 4 9 20"/></svg>
    </i>
	);
};

export default Italic;
