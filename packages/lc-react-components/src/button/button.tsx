import useClasses from '../use-classes/index';
import React from 'react';

type ButtonTypes =
	| 'default'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'error'
	| 'abort'
	| 'secondary-light'
	| 'success-light'
	| 'warning-light'
	| 'error-light';

interface ButtonProps {
	type?: ButtonTypes;
	ghost?: boolean;
	loading?: boolean;
	shadow?: boolean;
	auto?: boolean;
	effect?: boolean;
	disabled?: boolean;
	htmlType?: React.ButtonHTMLAttributes<unknown>['type'];
	icon?: React.ReactNode;
	iconRight?: React.ReactNode;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	className?: string;
	children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(props, ref) => {
		const { children, className: classNames = '', ...attrs } = props;
		const buttonRef = (ref as any) || React.createRef<HTMLElement>();
		const classes = useClasses('vta-btn', classNames);

		return (
			<button className={classes} ref={buttonRef}>
				{children}
			</button>
		);
	},
);

Button.displayName = 'VtaButton';

export default Button;
