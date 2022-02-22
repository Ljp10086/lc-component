
import React from 'react';
import { IconProps } from '../src/types';

const FileText: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2 14 8 20 8"/><path d="M16 13 8 13"/><path d="M16 17 8 17"/><path d="M10 9 9 9 8 9"/></svg>
    </i>
	);
};

export default FileText;