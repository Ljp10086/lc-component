
import React from 'react';
import { IconProps } from '../src/types';

const SkipBack: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 20 9 12 19 4 19 20z"/><path d="M5 19 5 5"/></svg>
    </i>
	);
};

export default SkipBack;
