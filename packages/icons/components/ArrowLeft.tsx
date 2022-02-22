
import React from 'react';
import { IconProps } from '../src/types';

const ArrowLeft: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 12 5 12"/><path d="M12 19 5 12 12 5"/></svg>
    </i>
	);
};

export default ArrowLeft;
