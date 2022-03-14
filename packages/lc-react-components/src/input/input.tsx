import React, { useRef } from 'react';
import useClasses from 'vta/use-classes/index';
import './input.less';

interface Props {
	size?: 'small' | 'large';
	prefix?: string | React.ReactNode;
	suffix?: string | React.ReactNode;
	before?: string | React.ReactNode;
	after?: string | React.ReactNode;
	disabled?: boolean;
	className?: string;
	onFocus?: React.DOMAttributes<HTMLInputElement>['onFocus'];
	onBlur?: React.DOMAttributes<HTMLInputElement>['onBlur'];
}

type NativeAttrs = Omit<
	React.InputHTMLAttributes<HTMLInputElement>,
	keyof Props
>;

type TextFieldProps = NativeAttrs & Props;

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
	(props, ref) => {
		const {
			before,
			after,
			className: classNames = '',
			size,
			prefix,
			suffix,
			disabled,
			onFocus,
			onBlur,
			...attrs
		} = props;

		const [isFocus, setIsFocus] = React.useState(false);

		const classes = useClasses('vta-text-field');

		const inputWrapperClasses = useClasses('vta-text-field-base', classNames, {
			'vta-text-field-focus': isFocus,
			[`vta-text-field-disabled`]: disabled,
			[`vta-text-field-${size}`]: size,
			'vta-text-field-before': !!before,
			'vta-text-field-after': !!after,
		});

		const wrapperRef = useRef(null);
		const inputRef = (ref as any) || React.createRef();

		const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
			setIsFocus(true);
			onFocus?.(e);
		};

		const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
			setIsFocus(false);
			onBlur?.(e);
		};

		const handleWrapperClick = () => {
			inputRef.current.focus();
		};

		return (
			<div className={classes}>
				{!!before && <div>{before}</div>}
				<div
					onClick={handleWrapperClick}
					ref={wrapperRef}
					className={inputWrapperClasses}
				>
					{!!prefix && <div className="vta-text-field-prefix">{prefix}</div>}
					<input
						onFocus={handleFocus}
						onBlur={handleBlur}
						ref={inputRef}
						className="vta-text-field-self"
						type="text"
						{...attrs}
					/>
					{!!suffix && <div className="vta-text-field-suffix">{suffix}</div>}
				</div>
				{!!after && <div className="vta-text-field-after">{after}</div>}
			</div>
		);
	},
);

TextField.displayName = 'VtaTextField';
export default TextField;
