
import React from 'react';
import { IconProps } from '../src/types';

const Layers: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2 2 7 12 12 22 7 12 2z"/><path d="M2 17 12 22 22 17"/><path d="M2 12 12 17 22 12"/></svg>
    </i>
	);
};

export default Layers;
