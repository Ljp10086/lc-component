import { optimize, OptimizedSvg } from 'svgo';
import svgoConfig from './svgo.config';
import * as path from 'path';
import * as fs from 'fs';
import {
	getFileName,
	indexBabelConfig,
	indexDeclarationTemplate,
	indexExportTemplate,
	mainBabelConfig,
	mainDeclarationTemplate,
	styleParse,
	template,
} from './utils';
import { transform } from '@babel/core';

// for test icons count
export const svgPath = path.join(__dirname, '../svg');
export const outPath = path.join(__dirname, '../lib');
const outIndexPath = path.join(outPath, 'index.js');
const outIndexDeclarationFilePath = path.join(outPath, 'index.d.ts');
const svgPaths = fs.readdirSync(svgPath);

(() => {
	fs.rmSync(outPath, { recursive: true, force: true });
	if (!fs.existsSync(outPath)) {
		fs.mkdirSync(outPath);
	}

	if (!fs.existsSync(outIndexPath)) {
		fs.writeFileSync(outIndexPath, '');
	}

	if (!fs.existsSync(outIndexDeclarationFilePath)) {
		fs.writeFileSync(outIndexDeclarationFilePath, '');
	}
})();

const generateDeclareFile = (fileName: string) => {
	const declarationTemplate = mainDeclarationTemplate(fileName);
	fs.writeFileSync(path.join(outPath, `${fileName}.d.ts`), declarationTemplate);
};

const generateSvgComponent = (optimizeString: string, fileName: string) => {
	const temStr = template(fileName, styleParse(optimizeString));
	const templateStr = transform(temStr, mainBabelConfig)?.code ?? '';
	fs.writeFileSync(path.join(outPath, `${fileName}.js`), templateStr);
};

const generateIndexFile = (fileName: string) => {
	fs.appendFileSync(
		outIndexPath,
		transform(indexExportTemplate(fileName), indexBabelConfig)?.code ?? '',
	);
};

const generateIndexDeclarationFile = (fileName: string) => {
	fs.appendFileSync(
		outIndexDeclarationFilePath,
		indexDeclarationTemplate(fileName),
	);
};

export const generate = () => {
	svgPaths.forEach((svgFileName) => {
		const svgFullPath = path.join(svgPath, svgFileName);
		const svg = fs.readFileSync(svgFullPath).toString();
		const { data: optimizeString } = optimize(svg, svgoConfig) as OptimizedSvg;
		const fileName = getFileName(svgFileName);
		generateDeclareFile(fileName);
		generateSvgComponent(optimizeString, fileName);
		generateIndexDeclarationFile(fileName);
		generateIndexFile(fileName);
	});
};
