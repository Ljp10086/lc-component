import {optimize, OptimizedSvg} from 'svgo';
import svgoConfig from './svgo.config';
import * as path from 'path';
import * as fs from 'fs';
import {indexExportTemplate, styleParse, template} from './utils';

const svgPath = path.join(__dirname, '../svg');
const outPath = path.join(__dirname, '../components');
const outIndexPath = path.join(outPath, 'index.ts');
const svgPaths = fs.readdirSync(svgPath);

(() => {
	if (!fs.existsSync(outPath)) {
		fs.mkdirSync(outPath);
	}

	if (!fs.existsSync(outIndexPath)) {
		fs.writeFileSync(outIndexPath, '');
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
		const fileName = svgFileName.split('-').map((e) => e[0].toUpperCase() + e.slice(1)).join('').replace('.svg', '.tsx');
		const templateStr = template(fileName, styleParse(optimizeString));
		fs.writeFileSync(path.join(outPath, `${fileName}`), templateStr); 
		fs.appendFileSync(outIndexPath, indexExportTemplate(fileName));
	});
};
