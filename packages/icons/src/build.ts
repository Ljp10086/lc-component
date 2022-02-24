import {optimize, OptimizedSvg} from 'svgo';
import svgoConfig from './svgo.config';
import * as path from 'path';
import * as fs from 'fs';
import {indexBabelConfig, indexDeclarationTemplate, indexExportTemplate, mainBabelConfig, mainDeclarationTemplate, styleParse, template} from './utils';
import { transform } from '@babel/core';

const svgPath = path.join(__dirname, '../svg');
const outPath = path.join(__dirname, '../lib');
const outIndexPath = path.join(outPath, 'index.js');
const outIndexDeclarationFilePath = path.join(outPath, 'index.d.ts');
const svgPaths = fs.readdirSync(svgPath);

(() => {
	fs.rmSync(outPath, {recursive: true, force: true});
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

export const generate = () => {
	svgPaths.forEach((svgFileName) => {
		const svgFullPath = path.join(svgPath, svgFileName);
		const svg = fs.readFileSync(svgFullPath).toString();
		const { data: optimizeString } = optimize(
			svg,
			svgoConfig
		) as OptimizedSvg;
		const fileName = svgFileName.split('-').map((e) => e[0].toUpperCase() + e.slice(1)).join('').replace('.svg', '');
		const temStr = template(fileName, styleParse(optimizeString));
		console.log('first', temStr);
		const templateStr = transform(temStr, mainBabelConfig)?.code ?? '';
		const declarationTemplate = mainDeclarationTemplate(fileName);
		fs.writeFileSync(path.join(outPath, `${fileName}.d.ts`), declarationTemplate);
		fs.writeFileSync(path.join(outPath, `${fileName}.js`), templateStr); 
		fs.appendFileSync(outIndexDeclarationFilePath, indexDeclarationTemplate(fileName));
		fs.appendFileSync(outIndexPath, transform(indexExportTemplate(fileName), indexBabelConfig)?.code ?? '');
	});
};
