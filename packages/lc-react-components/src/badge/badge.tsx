import useClasses from '../use-classes/index';
import React from 'react';
import './styles/badge.less';

type BadgeTypes =
	| 'default'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'error'
	| 'cyan'
	| 'alert'
	| 'violet';

interface Props {
	type?: BadgeTypes;
	variant?: 'contrast' | '';
	outline?: boolean;
	size?: 'small' | 'large';
}

const Badge: React.FC<Props> = (props) => {
	const { type, children, outline, variant, size } = props;

	const classes = useClasses('vta-badge', `vta-badge-${size}`, {
		[`vta-badge-${type}`]: type,
		[`vta-badge-contrast`]: variant === 'contrast',
		[`vta-badge-outline`]: outline,
	});

	return (
		<div className={classes}>
			<span>{children}</span>
		</div>
	);
};

Badge.displayName = 'VtaBadge';

export default Badge;
