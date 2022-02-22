
import React from 'react';
import { IconProps } from '../src/types';

const CornerRightDown: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M10 15 15 20 20 15"/><path d="M4 4h7a4 4 0 0 1 4 4v12"/></svg>
    </i>
	);
};

export default CornerRightDown;
