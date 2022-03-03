import useClasses from '../use-classes/index';
import * as React from 'react';
import './loading.less';

interface LoadingProps {
	size?: number;
}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof LoadingProps>;

const Loading: React.FC<LoadingProps & NativeAttrs> = (props) => {
	const { size = 1, className = '', children, ...attrs } = props;

	const classes = useClasses('vta-loading', className);

	const iconStyle = React.useMemo(() => {
		const loadingSize = size / 4;
		return { width: `${loadingSize}rem`, height: `${loadingSize}rem` };
	}, [size]);

	return (
		<span className={classes} {...attrs}>
			<i style={iconStyle}></i>
			<i style={iconStyle}></i>
			<i style={iconStyle}></i>
		</span>
	);
};

Loading.displayName = 'VtaLoading';

export default Loading;
