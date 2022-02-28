import useClasses from '../use-classes';

describe('useClasses', () => {
	test('string class name', () => {
		const res = useClasses('a', 'b', 'c');
		expect(res).toEqual('a b c');
	});

	test('string class object', () => {
		const res = useClasses(
			{ b: 1, c: false, d: 0, e: null, f: undefined, g: true },
			'a',
			{ t: false, q: 1 },
		);
		expect(res).toEqual('b g a q');
	});
});
