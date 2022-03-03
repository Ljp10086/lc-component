import useClasses from '../use-classes/index';
import * as React from 'react';
import './status-dot.less';

type DotStateTypes = 'default' | 'secondary' | 'success' | 'warning' | 'error';

interface StatusDotProps {
	state?: DotStateTypes;
	label?: string;
}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof StatusDotProps>;

const StatusDot: React.FC<StatusDotProps & NativeAttrs> = (props) => {
	const {
		state = 'default',
		className: classNames = '',
		label,
		...attrs
	} = props;

	const classes = useClasses('dot', `dot-${state}`);

	return (
		<span className={useClasses('dot-wrapper', classNames)} {...attrs}>
			<span className={classes}></span>
			{label && <span className="label">{label}</span>}
		</span>
	);
};

StatusDot.displayName = 'VtaStatusDot';

export default StatusDot;
