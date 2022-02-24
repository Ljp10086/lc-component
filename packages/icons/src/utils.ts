export const indexExportTemplate = (componentName: string) => `export { default as ${componentName} } from './${componentName}';\n`;

export const template = (name: string, svgString: string) => `import React from 'react';

const ${name} = React.forwardRef((props, ref) => {
	const { size = 24, color, ...rest } = props;
	const svgRef = ref || React.createRef();
	return (
		<i>
      ${svgString}
    </i>
	);
});

${name}.displayName = '${name}';

export default ${name};\n`;

export const mainBabelConfig =  {   
	presets: [
		'@babel/preset-env',
		'@babel/preset-react',
	],
	minified: true, 
};

export const indexBabelConfig =  {   
	presets: [
		'@babel/preset-env',
	],
	minified: true, 
};

export const styleParse = (svgStr: string) => {
	const reactStyleSvg = svgStr.replace(/-([a-z])(?=[a-z-]*[=\s/>])/g, g => g[1].toUpperCase());
	return reactStyleSvg.replace(/<svg(.*?)>/gi, '<svg$1 ref={svgRef} {...rest} style={{width: size, height: size, color }}>');
};

export const baseDeclarationTemplate = () => `import React from 'react';
interface IconProps extends React.SVGAttributes<SVGSVGElement> {
	color?: string;
	size?: number | string;
}
type Icon = React.ForwardRefExoticComponent<
		React.RefAttributes<SVGSVGElement> & IconProps>;\n`;

export const mainDeclarationTemplate = (name: string) => `${baseDeclarationTemplate()}
declare const ${name}: Icon;
export default ${name};
`;

export const indexDeclarationTemplate = (name: string) => `export {default as ${name}} from './${name}';\n`;
