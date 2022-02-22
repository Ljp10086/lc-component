
import React from 'react';
import { IconProps } from '../src/types';

const Framer: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"/></svg>
    </i>
	);
};

export default Framer;
