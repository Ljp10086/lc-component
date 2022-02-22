
import React from 'react';
import { IconProps } from '../src/types';

const Zap: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 2 3 14 12 14 11 22 21 10 12 10 13 2z"/></svg>
    </i>
	);
};

export default Zap;
