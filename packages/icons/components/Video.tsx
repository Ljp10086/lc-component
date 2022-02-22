
import React from 'react';
import { IconProps } from '../src/types';

const Video: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M23 7 16 12 23 17 23 7z"/><rect width="15" height="14" x="1" y="5" rx="2" ry="2"/></svg>
    </i>
	);
};

export default Video;
