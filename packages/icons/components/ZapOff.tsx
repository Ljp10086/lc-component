
import React from 'react';
import { IconProps } from '../src/types';

const ZapOff: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M12.41 6.75 13 2 10.57 4.92"/><path d="M18.57 12.91 21 10 15.66 10"/><path d="M8 8 3 14 12 14 11 22 16 16"/><path d="M1 1 23 23"/></svg>
    </i>
	);
};

export default ZapOff;
