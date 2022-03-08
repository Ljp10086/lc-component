import useClasses from '../use-classes/index';
import * as React from 'react';
import './checkbox.less';

interface Props {
	checked?: boolean;
	className?: string;
	disabled?: boolean;
	fullWidth?: boolean;
	label?: string | React.ReactNode;
	children?: React.ReactNode;
	onChange?: React.InputHTMLAttributes<unknown>['onChange'];
}

type NativeAttrs = Omit<React.InputHTMLAttributes<unknown>, keyof Props>;

type CheckboxProps = Props & NativeAttrs;

const Checkbox = React.forwardRef<unknown, CheckboxProps>((props, ref) => {
	const {
		className: classNames = '',
		checked = false,
		onChange,
		children,
		fullWidth,
		disabled,
		label,
		...attrs
	} = props;
	const checkboxRef = (ref as any) || React.createRef();

	const hasChildren = React.Children.count(children) !== 0 && children;
	const classes = useClasses(classNames, 'vta-checkbox', {
		'vta-checkbox-disabled': disabled,
		'vta-checkbox-fullWidth': fullWidth,
	});

	const displayBoxClasses = useClasses('vta-checkbox-display-box', {
		'vta-checkbox-display-box-checked': checked,
		'vta-checkbox-checked': checked,
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (disabled) {
			e.preventDefault();
			e.stopPropagation();
			return;
		}
		onChange?.(e);
	};

	return (
		<div>
			{label && <div className="vta-checkbox-label">{label}</div>}
			<label className={classes}>
				<input
					disabled={disabled}
					onChange={handleChange}
					{...attrs}
					className="vta-checkbox-ele"
					type="checkbox"
					ref={checkboxRef}
				></input>
				<span className={displayBoxClasses}></span>
				{hasChildren && <span className="vta-checkbox-text">{children}</span>}
			</label>
		</div>
	);
});

Checkbox.displayName = 'VtaCheckbox';

export default Checkbox;
