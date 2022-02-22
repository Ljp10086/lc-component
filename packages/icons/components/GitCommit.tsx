
import React from 'react';
import { IconProps } from '../src/types';

const GitCommit: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M1.05 12 7 12"/><path d="M17.01 12 22.96 12"/></svg>
    </i>
	);
};

export default GitCommit;
