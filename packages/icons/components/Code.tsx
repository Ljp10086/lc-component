
import React from 'react';
import { IconProps } from '../src/types';

const Code: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 18 22 12 16 6"/><path d="M8 6 2 12 8 18"/></svg>
    </i>
	);
};

export default Code;
