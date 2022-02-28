// rollup.config.js
import typescript from 'rollup-plugin-typescript2';
import clear from 'rollup-plugin-clear';
import less from 'rollup-plugin-less';
import * as path from 'path';

const inputFilePath = path.resolve(__dirname, './src/index.ts');
const outputFileDir = path.resolve(__dirname, './lib/index.js');

export default {
	input: inputFilePath,
	output: {
		file: outputFileDir,
	},
	plugins: [
		clear({
			targets: [outputFileDir],
			watch: true,
		}),
		typescript(),
		less({ output: path.join(__dirname, './lib/css/index.css') }),
	],
};
