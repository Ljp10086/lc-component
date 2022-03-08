import useClasses from '../use-classes/index';
import * as React from 'react';
import './status-dot.less';

interface Props {
	label?: string;
}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>;

const Error: React.FC<Props & NativeAttrs> = (props) => {
	const { className: classNames = '', ...attrs } = props;

	const classes = useClasses();

	return <p>123</p>;
};

Error.displayName = 'VtaError';

export default Error;
