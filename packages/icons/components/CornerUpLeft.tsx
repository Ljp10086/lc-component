
import React from 'react';
import { IconProps } from '../src/types';

const CornerUpLeft: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 14 4 9 9 4"/><path d="M20 20v-7a4 4 0 0 0-4-4H4"/></svg>
    </i>
	);
};

export default CornerUpLeft;
