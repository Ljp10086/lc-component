import React from 'react';
import { IconProps } from '../src/types';

const Github = React.forwardRef<SVGSVGElement, IconProps>((props: IconProps, ref) => {
	const { size = 24, color = 'black', ...rest } = props;
	return (
		<i>
			<svg ref={ref} {...rest} style={{width: size, height: size, color }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
		</i>
	);
});

Github.displayName = 'Github';

export default Github;