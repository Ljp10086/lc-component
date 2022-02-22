
import React from 'react';
import { IconProps } from '../src/types';

const MousePointer: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3zM13 13l6 6"/></svg>
    </i>
	);
};

export default MousePointer;
