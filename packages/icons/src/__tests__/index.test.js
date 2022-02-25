'use strict';
import { name } from '../../package.json';
import * as fs from 'fs';
import * as path from 'path';
import React from 'react';
import Github from '../../lib/Github';
import { cleanup, render, screen } from '@testing-library/react';

const svgPath = path.join(__dirname, '../../svg');
const outPath = path.join(__dirname, '../../lib');
describe(name, () => {
	beforeEach(cleanup);

	test('icons number', () => {
		const generateCount = fs.readdirSync(outPath).length;
		const svgCount = fs.readdirSync(svgPath).length;
		expect(generateCount).toEqual(svgCount * 2 + 2);
	});

	test('icon size', () => {
		const { getByTestId } = render(<Github size={200} />);
		const githubSvg = getByTestId('icon');
		expect(githubSvg.style.width).toEqual('200px');
		expect(githubSvg.style.height).toEqual('200px');
	});

	test('icon color', () => {
		const { getByTestId } = render(<Github color="red" />);
		const githubSvg = getByTestId('icon');
		expect(githubSvg.style.color).toEqual('red');
	});

	test('icon attr', () => {
		const { getByTestId } = render(
			<Github className="icon-github" id="icon-github" />,
		);
		const githubSvg = getByTestId('icon');
		expect(githubSvg.id).toEqual('icon-github');
		expect(githubSvg.classList.contains('icon-github')).toBeTruthy();
	});
});
