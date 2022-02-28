import * as React from 'react';

type ClassNamesObject = {
	[K: string]: boolean | string | number | null | undefined;
};
type ClassNameType = string | number | ClassNamesObject;

const isObject = (value: ClassNameType): boolean =>
	value.toString() === '[object Object]';

const parseObjToStr = (classNameObj: ClassNamesObject): string => {
	const keys = Object.keys(classNameObj);
	let str = '';
	keys.forEach((objKey) => {
		const objValue = classNameObj[objKey];
		if (objValue) {
			str = str ? `${str} ${objKey}` : `${objKey}`;
		}
	});
	return str;
};

const useClasses = (...classNames: ClassNameType[]): string => {
	const classNameStr = React.useMemo(
		() =>
			classNames.reduce((str: string, className) => {
				if (isObject(className)) {
					str = str
						? `${str} ${parseObjToStr(className as ClassNamesObject)}`
						: `${parseObjToStr(className as ClassNamesObject)}`;
				} else {
					str = str ? `${str} ${className}` : `${className}`;
				}
				return str;
			}, ''),
		[...classNames],
	);

	return classNameStr.trim();
};

export default useClasses;
