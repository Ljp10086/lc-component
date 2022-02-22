
import React from 'react';
import { IconProps } from '../src/types';

const Trello: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M7 7H10V16H7z"/><path d="M14 7H17V12H14z"/></svg>
    </i>
	);
};

export default Trello;
