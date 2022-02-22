
import React from 'react';
import { IconProps } from '../src/types';

const ShoppingBag: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6 21 6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
    </i>
	);
};

export default ShoppingBag;
