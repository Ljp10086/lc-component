import { OptimizeOptions } from 'svgo';

const svgoConfig: OptimizeOptions = {
	plugins: [
		'cleanupAttrs',
		'removeDoctype',
		'removeXMLProcInst',
		'removeComments',
		'removeMetadata',
		'removeTitle',
		'removeDesc',
		'removeUselessDefs',
		'removeEditorsNSData',
		'removeEmptyAttrs',
		'removeHiddenElems',
		'removeEmptyText',
		'removeEmptyContainers',
		'removeViewBox',
		'cleanupEnableBackground',
		'convertStyleToAttrs',
		'convertColors',
		'convertPathData',
		'convertTransform',
		'removeUnknownsAndDefaults',
		'removeNonInheritableGroupAttrs',
		'removeUselessStrokeAndFill',
		'removeUnusedNS',
		'removeUnknownsAndDefaults',
		'cleanupIDs',
		'cleanupNumericValues',
		'moveElemsAttrsToGroup',
		'moveGroupAttrsToElems',
		'collapseGroups',
		'removeRasterImages',
		'mergePaths',
		'convertShapeToPath',
		'sortAttrs',
		'removeDimensions',
		{
			name: 'removeAttrs',
			params: {
				attrs: '(class)',
			},
		},
	],
};

export default svgoConfig;
