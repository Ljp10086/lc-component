import useClasses from '../use-classes/index';
import * as React from 'react';
import './radio.less';
import { RadioContext, RadioValueType } from './context';

interface Props {
	value?: RadioValueType;
	className?: string;
	disabled?: boolean;
	required?: boolean;
	children?: React.ReactNode;
	name?: string;
	checked?: boolean;
	onChange?: React.InputHTMLAttributes<unknown>['onChange'];
}

type NativeAttrs = Omit<React.InputHTMLAttributes<unknown>, keyof Props>;

type RadioProps = Props & NativeAttrs;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Radio = React.forwardRef<unknown, RadioProps>((props, ref) => {
	const {
		className: classNames = '',
		value,
		checked,
		required,
		onChange,
		children,
		disabled,
		name,
		...attrs
	} = props;
	const context = React.useContext(RadioContext);
	const [isChecked, setIsChecked] = React.useState(Boolean(checked));
	const hasChildren = React.Children.count(children) !== 0 && children;

	const classes = useClasses('vta-radio', classNames, {
		'vta-radio-disabled': disabled ?? context.disabled,
	});
	const displayBoxClasses = useClasses('vta-radio-display-box', {
		'vta-radio-checked': isChecked,
	});

	React.useEffect(() => {
		setIsChecked(value == context.value);
	}, [context.value]);

	const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		if (disabled) {
			ev.preventDefault();
			ev.stopPropagation();
			return;
		}
		onChange?.(ev);
		context.onChange?.(ev.target.value);
	};

	return (
		<label className={classes}>
			<input
				checked={isChecked}
				className="vta-radio-element"
				onChange={handleChange}
				type="radio"
				value={value}
				required={required ?? context.required}
				disabled={disabled ?? context.disabled}
				name={name ?? context.name}
				{...attrs}
			/>
			<span className={displayBoxClasses}></span>
			{hasChildren && <span className="vta-radio-text">{children}</span>}
		</label>
	);
});

Radio.displayName = 'VtaRadio';

export default Radio;
