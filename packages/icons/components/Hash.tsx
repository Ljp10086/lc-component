
import React from 'react';
import { IconProps } from '../src/types';

const Hash: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 9 20 9"/><path d="M4 15 20 15"/><path d="M10 3 8 21"/><path d="M16 3 14 21"/></svg>
    </i>
	);
};

export default Hash;
