
import React from 'react';
import { IconProps } from '../src/types';

const DivideCircle: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 12 16 12"/><path d="M12 16 12 16"/><path d="M12 8 12 8"/><circle cx="12" cy="12" r="10"/></svg>
    </i>
	);
};

export default DivideCircle;
