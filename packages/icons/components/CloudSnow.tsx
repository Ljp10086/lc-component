
import React from 'react';
import { IconProps } from '../src/types';

const CloudSnow: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/><path d="M8 16 8.01 16"/><path d="M8 20 8.01 20"/><path d="M12 18 12.01 18"/><path d="M12 22 12.01 22"/><path d="M16 16 16.01 16"/><path d="M16 20 16.01 20"/></svg>
    </i>
	);
};

export default CloudSnow;
