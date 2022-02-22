
import React from 'react';
import { IconProps } from '../src/types';

const Rewind: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M11 19 2 12 11 5 11 19z"/><path d="M22 19 13 12 22 5 22 19z"/></svg>
    </i>
	);
};

export default Rewind;
