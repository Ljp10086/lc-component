
import React from 'react';
import { IconProps } from '../src/types';

const Sliders: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 21 4 14"/><path d="M4 10 4 3"/><path d="M12 21 12 12"/><path d="M12 8 12 3"/><path d="M20 21 20 16"/><path d="M20 12 20 3"/><path d="M1 14 7 14"/><path d="M9 8 15 8"/><path d="M17 16 23 16"/></svg>
    </i>
	);
};

export default Sliders;
