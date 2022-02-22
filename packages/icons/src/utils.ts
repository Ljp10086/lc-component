export const indexExportTemplate = (componentName: string) => `
export { default as ${componentName} } from './${componentName}';
`;

export const template = (name: string, svgString: string) => `
import React from 'react';
import { IconProps } from '../src/types';

const ${name}: React.ForwardRefRenderFunction<unknown, IconProps> = (props) => {
	const { size = 24, color, ...rest } = props;
	return (
		<i>
      ${svgString}
    </i>
	);
};

export default ${name};
`;

export const styleParse = (svgStr: string) => {
	const reactStyleSvg = svgStr.replace(/-([a-z])(?=[a-z-]*[=\s/>])/g, g => g[1].toUpperCase());
	return reactStyleSvg.replace(/<svg(*?)><\/svg>/gi, '<svg $1 ref={ref} {...rest} style={{width: size, height: size, color }}></svg>');
};
