
import React from 'react';
import { IconProps } from '../src/types';

const Terminal: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 17 10 11 4 5"/><path d="M12 19 20 19"/></svg>
    </i>
	);
};

export default Terminal;
