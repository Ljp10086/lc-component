
import React from 'react';
import { IconProps } from '../src/types';

const Anchor: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="5" r="3"/><path d="M12 22 12 8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg>
    </i>
	);
};

export default Anchor;
