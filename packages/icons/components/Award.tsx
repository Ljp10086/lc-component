
import React from 'react';
import { IconProps } from '../src/types';

const Award: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"/><path d="M8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
    </i>
	);
};

export default Award;
