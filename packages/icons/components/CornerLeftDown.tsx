
import React from 'react';
import { IconProps } from '../src/types';

const CornerLeftDown: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 15 9 20 4 15"/><path d="M20 4h-7a4 4 0 0 0-4 4v12"/></svg>
    </i>
	);
};

export default CornerLeftDown;
