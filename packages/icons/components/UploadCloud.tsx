
import React from 'react';
import { IconProps } from '../src/types';

const UploadCloud: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 16 12 12 8 16"/><path d="M12 12 12 21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/><path d="M16 16 12 12 8 16"/></svg>
    </i>
	);
};

export default UploadCloud;
