
import React from 'react';
import { IconProps } from '../src/types';

const CornerRightUp: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M10 9 15 4 20 9"/><path d="M4 20h7a4 4 0 0 0 4-4V4"/></svg>
    </i>
	);
};

export default CornerRightUp;
