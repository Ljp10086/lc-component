
import React from 'react';
import { IconProps } from '../src/types';

const TrendingUp: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M23 6 13.5 15.5 8.5 10.5 1 18"/><path d="M17 6 23 6 23 12"/></svg>
    </i>
	);
};

export default TrendingUp;
