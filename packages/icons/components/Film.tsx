
import React from 'react';
import { IconProps } from '../src/types';

const Film: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="2.18" ry="2.18"/><path d="M7 2 7 22"/><path d="M17 2 17 22"/><path d="M2 12 22 12"/><path d="M2 7 7 7"/><path d="M2 17 7 17"/><path d="M17 17 22 17"/><path d="M17 7 22 7"/></svg>
    </i>
	);
};

export default Film;
