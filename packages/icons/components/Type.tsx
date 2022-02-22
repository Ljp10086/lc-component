
import React from 'react';
import { IconProps } from '../src/types';

const Type: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 7 4 4 20 4 20 7"/><path d="M9 20 15 20"/><path d="M12 4 12 20"/></svg>
    </i>
	);
};

export default Type;
