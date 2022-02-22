
import React from 'react';
import { IconProps } from '../src/types';

const Sunrise: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 18a5 5 0 0 0-10 0"/><path d="M12 2 12 9"/><path d="M4.22 10.22 5.64 11.64"/><path d="M1 18 3 18"/><path d="M21 18 23 18"/><path d="M18.36 11.64 19.78 10.22"/><path d="M23 22 1 22"/><path d="M8 6 12 2 16 6"/></svg>
    </i>
	);
};

export default Sunrise;
