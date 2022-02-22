
import React from 'react';
import { IconProps } from '../src/types';

const Codesandbox: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M7.5 4.21 12 6.81 16.5 4.21"/><path d="M7.5 19.79 7.5 14.6 3 12"/><path d="M21 12 16.5 14.6 16.5 19.79"/><path d="M3.27 6.96 12 12.01 20.73 6.96"/><path d="M12 22.08 12 12"/></svg>
    </i>
	);
};

export default Codesandbox;