
import React from 'react';
import { IconProps } from '../src/types';

const Droplet: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="m12 2.69 5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
    </i>
	);
};

export default Droplet;
