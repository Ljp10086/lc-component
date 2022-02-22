
import React from 'react';
import { IconProps } from '../src/types';

const List: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 6 21 6"/><path d="M8 12 21 12"/><path d="M8 18 21 18"/><path d="M3 6 3.01 6"/><path d="M3 12 3.01 12"/><path d="M3 18 3.01 18"/></svg>
    </i>
	);
};

export default List;
