
import React from 'react';
import { IconProps } from '../src/types';

const ChevronsUp: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 11 12 6 7 11"/><path d="M17 18 12 13 7 18"/></svg>
    </i>
	);
};

export default ChevronsUp;
