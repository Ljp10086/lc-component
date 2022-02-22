
import React from 'react';
import { IconProps } from '../src/types';

const Map: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6z"/><path d="M8 2 8 18"/><path d="M16 6 16 22"/></svg>
    </i>
	);
};

export default Map;
