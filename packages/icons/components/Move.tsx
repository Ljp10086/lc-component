
import React from 'react';
import { IconProps } from '../src/types';

const Move: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 9 2 12 5 15"/><path d="M9 5 12 2 15 5"/><path d="M15 19 12 22 9 19"/><path d="M19 9 22 12 19 15"/><path d="M2 12 22 12"/><path d="M12 2 12 22"/></svg>
    </i>
	);
};

export default Move;
