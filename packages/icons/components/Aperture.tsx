
import React from 'react';
import { IconProps } from '../src/types';

const Aperture: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M14.31 8 20.05 17.94"/><path d="M9.69 8 21.17 8"/><path d="M7.38 12 13.12 2.06"/><path d="M9.69 16 3.95 6.06"/><path d="M14.31 16 2.83 16"/><path d="M16.62 12 10.88 21.94"/></svg>
    </i>
	);
};

export default Aperture;
