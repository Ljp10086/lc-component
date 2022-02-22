
import React from 'react';
import { IconProps } from '../src/types';

const Loader: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2 12 6"/><path d="M12 18 12 22"/><path d="M4.93 4.93 7.76 7.76"/><path d="M16.24 16.24 19.07 19.07"/><path d="M2 12 6 12"/><path d="M18 12 22 12"/><path d="M4.93 19.07 7.76 16.24"/><path d="M16.24 7.76 19.07 4.93"/></svg>
    </i>
	);
};

export default Loader;
