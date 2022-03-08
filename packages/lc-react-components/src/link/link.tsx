import useClasses from '../use-classes/index';
import React from 'react';
import './link.less';

interface Props {
	variant?: 'secondary' | 'primary' | 'blend' | 'highlight';
}

type NativeAttrs = Omit<React.AnchorHTMLAttributes<unknown>, keyof Props>;

const Link: React.FC<Props & NativeAttrs> = (props) => {
	const { className: classNames = '', children, variant, ...attrs } = props;

	const classes = useClasses(
		'vta-link',
		{
			[`vta-link-${variant}`]: variant,
		},
		classNames,
	);

	return (
		<a {...attrs} className={classes}>
			{children}
		</a>
	);
};

Link.displayName = 'VtaLink';

export default Link;
