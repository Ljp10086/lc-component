import useClasses from '../use-classes/index';
import React from 'react';
import './styles/grid-container.less';
import { GridAlignItems, GridJustify, GridWrap } from './utils/types';
import { ContainerContext } from './container-context';

interface Props {
	wrap?: GridWrap;
	flex?: string | number;
	justify?: GridJustify;
	alignItems?: GridAlignItems;
	className?: string;
	gap?: number | number[];
}

type NativeAttrs = Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;

type GridContainerProps = NativeAttrs & Props;

const GridContainer: React.FC<GridContainerProps> = (props) => {
	const {
		justify,
		alignItems,
		wrap,
		gap,
		children,
		className = '',
		style,
		...attrs
	} = props;

	const styles: any = {
		justifyContent: justify,
		alignItems,
		flexWrap: wrap,
	};

	if (gap) {
		if (Array.isArray(gap)) {
			const rowGap = gap[0];
			styles.rowGap = rowGap;
			const columnGap = gap[1];
			styles.marginLeft = -columnGap;
			styles.marginRight = -columnGap;
		} else {
			const rowGap = gap;
			styles.rowGap = rowGap;
			const columnGap = gap;
			styles.marginLeft = -columnGap;
			styles.marginRight = -columnGap;
		}
	}

	const classes = useClasses('vta-grid-container');

	return (
		<ContainerContext.Provider value={{ gap }}>
			<div style={{ ...style, ...styles }} className={classes} {...attrs}>
				{children}
			</div>
		</ContainerContext.Provider>
	);
};

export default GridContainer;
