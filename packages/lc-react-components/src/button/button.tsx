import useClasses from '../use-classes/index';
import React, { useRef, useState } from 'react';
import './styles/button.less';
import { Loading } from '../loading/index';

type ButtonTypes =
	| 'default'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'error'
	| 'cyan'
	| 'alert'
	| 'violet';

interface ButtonProps {
	prefix?: string | JSX.Element;
	suffix?: string | JSX.Element;
	type?: ButtonTypes;
	shape?: 'square' | 'circle';
	variant?: 'ghost' | 'shadow';
	loading?: boolean;
	disabled?: boolean;
	htmlType?: React.ButtonHTMLAttributes<any>['type'];
	icon?: React.ReactNode;
	iconRight?: React.ReactNode;
	className?: string;
	children?: React.ReactNode;
	size?: 'default' | 'small' | 'large';
}

type NativeButtonProps = Omit<
	React.HTMLAttributes<HTMLButtonElement>,
	keyof ButtonProps
>;

const Button = React.forwardRef<
	HTMLButtonElement,
	ButtonProps & NativeButtonProps
>((props, ref) => {
	const {
		size,
		shape,
		type = 'default',
		children,
		iconRight,
		icon,
		variant,
		htmlType = 'button',
		className: classNames = '',
		onClick,
		disabled,
		loading,
		prefix,
		suffix,
		...attrs
	} = props;

	const buttonRef = (ref as any) || React.createRef<HTMLButtonElement>();
	const classes = useClasses(
		'vta-btn',
		`vta-btn-${type}`,
		{
			[`vta-btn-${shape}`]: shape,
			[`vta-btn-${size}`]: size,
			'vta-btn-ghost': variant === 'ghost',
			'vta-btn-shadow': variant === 'shadow',
			'vtn-button-pointer': loading,
		},
		classNames,
	);

	const waveRef = useRef<HTMLSpanElement | null>(null);

	const [longWidth, setLongWidth] = useState(0);
	const [drip, setDrip] = useState({ x: 0, y: 0 });
	const [isWaving, setisWaving] = useState(false);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (disabled || loading) {
			e.preventDefault();
			return;
		}

		if (!isWaving) {
			setisWaving(true);
			const longWidth = Math.max(
				buttonRef?.current?.offsetWidth,
				buttonRef?.current?.offsetHeight,
			);
			setLongWidth(longWidth);
			const rect = waveRef?.current?.getBoundingClientRect();
			if (rect) {
				setDrip({
					x: e.pageX - rect.x - longWidth / 2,
					y: e.pageY - rect.y - longWidth / 2,
				});
			}
		}

		onClick?.(e);
	};

	const handleWaveAnimationComplete = (
		e: React.AnimationEvent<HTMLDivElement>,
	) => {
		setisWaving(false);
	};

	return (
		<button
			{...attrs}
			type={htmlType}
			disabled={disabled}
			onClick={handleClick}
			className={classes}
			ref={buttonRef}
		>
			{loading && (
				<span className="vta-btn-loading">
					<Loading></Loading>
				</span>
			)}
			{prefix && <span className="vta-btn-prefix">{prefix}</span>}
			<span>{children}</span>
			{suffix && <span className="vta-btn-suffix">{suffix}</span>}
			<span ref={waveRef} className="wave-wrapper">
				<div
					onAnimationEnd={(e) => handleWaveAnimationComplete(e)}
					className={useClasses('wave', { rippleEffect: isWaving })}
					style={{
						height: longWidth + 'px',
						width: longWidth + 'px',
						top: drip.y + 'px',
						left: drip.x + 'px',
					}}
				></div>
			</span>
		</button>
	);
});

Button.displayName = 'VtaButton';

export default Button;
