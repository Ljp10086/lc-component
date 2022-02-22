
import React from 'react';
import { IconProps } from '../src/types';

const Pause: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 4H10V20H6z"/><path d="M14 4H18V20H14z"/></svg>
    </i>
	);
};

export default Pause;
