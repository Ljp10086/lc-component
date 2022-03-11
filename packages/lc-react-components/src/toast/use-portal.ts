import React from 'react';

const createElement = () => {
	const el = document.createElement('div');
	el.setAttribute('id', 'vta-ui-toast');
	return el;
};

export const usePortal = () => {
	const [elSnapshot, setElSnapshot] = React.useState<HTMLElement | null>(
		createElement(),
	);
	const parentElement = document.body;

	React.useEffect(() => {
		let el: HTMLElement | null = parentElement.querySelector('#vta-ui-toast');

		if (!el) {
			el = createElement();
		}

		setElSnapshot(el);
	}, []);

	return elSnapshot;
};
