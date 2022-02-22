
import React from 'react';
import { IconProps } from '../src/types';

const CreditCard: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><rect width="22" height="16" x="1" y="4" rx="2" ry="2"/><path d="M1 10 23 10"/></svg>
    </i>
	);
};

export default CreditCard;
