
import React from 'react';
import { IconProps } from '../src/types';

const ArrowRight: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12 19 12"/><path d="M12 5 19 12 12 19"/></svg>
    </i>
	);
};

export default ArrowRight;
