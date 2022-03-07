import useClasses from '../use-classes/index';
import React from 'react';
import {
	GridAlignContent,
	GridAlignItems,
	GridDirection,
	GridJustify,
} from './utils/types';
import { tuple } from 'src/_utils/type';
import { BLOCK_COUNT } from './utils/vars';
import './styles/grid.less';
import { ContainerContext } from './container-context';

export interface Props {
	xs?: number;
	sm?: number;
	md?: number;
	lg?: number;
	xl?: number;
	flex?: string | number;
	className?: string;
}

type NativeAttrs = Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;

type GridProps = NativeAttrs & Props;

const Grid: React.FC<GridProps> = (props) => {
	const {
		xs,
		sm,
		md,
		lg,
		xl,
		children,
		className = '',
		style,
		...attrs
	} = props;

	const { gap } = React.useContext(ContainerContext);

	const classes = useClasses('vta-grid', {
		[`vta-grid-xs-${xs}`]: xs,
		[`vta-grid-sm-${sm}`]: sm,
		[`vta-grid-md-${md}`]: md,
		[`vta-grid-lg-${lg}`]: lg,
		[`vta-grid-xl-${xl}`]: xl,
	});

	const mergedStyle: any = {};

	if (gap) {
	}

	if (gap) {
		const gutter = Array.isArray(gap) ? gap[1] : gap;
		mergedStyle.paddingLeft = gutter;
		mergedStyle.paddingRight = gutter;
	}

	return (
		<div className={classes} style={{ ...mergedStyle }}>
			<div className={className} {...attrs} style={{ ...style }}>
				{children}
			</div>
		</div>
	);
};

Grid.displayName = 'VtaGrid';
export default Grid;
