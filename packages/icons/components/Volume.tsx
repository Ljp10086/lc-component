
import React from 'react';
import { IconProps } from '../src/types';

const Volume: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M11 5 6 9 2 9 2 15 6 15 11 19 11 5z"/></svg>
    </i>
	);
};

export default Volume;
