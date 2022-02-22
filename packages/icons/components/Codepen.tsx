
import React from 'react';
import { IconProps } from '../src/types';

const Codepen: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2z"/><path d="M12 22 12 15.5"/><path d="M22 8.5 12 15.5 2 8.5"/><path d="M2 15.5 12 8.5 22 15.5"/><path d="M12 2 12 8.5"/></svg>
    </i>
	);
};

export default Codepen;
