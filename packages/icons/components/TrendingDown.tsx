
import React from 'react';
import { IconProps } from '../src/types';

const TrendingDown: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M23 18 13.5 8.5 8.5 13.5 1 6"/><path d="M17 18 23 18 23 12"/></svg>
    </i>
	);
};

export default TrendingDown;
