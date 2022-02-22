
import React from 'react';
import { IconProps } from '../src/types';

const BarChart: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size, color, ...rest } = props;
	return (
		<i>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20 12 10"/><path d="M18 20 18 4"/><path d="M6 20 6 16"/></svg>
    </i>
	);
};

export default BarChart;
