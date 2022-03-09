import useClasses from '../use-classes/index';
import * as React from 'react';
import './radio.less';
import { RadioValueType, RadioOnChangeType, RadioContext } from './context';

interface Props {
	name?: string;
	value?: RadioValueType;
	className?: string;
	disabled?: boolean;
	required?: boolean;
	// label?: string | React.ReactNode;
	children?: React.ReactNode;
	onChange?: RadioOnChangeType;
}

type NativeAttrs = Omit<React.InputHTMLAttributes<unknown>, keyof Props>;

type RadioGroupProps = Props & NativeAttrs;

const RadioGroup: React.FC<RadioGroupProps> = (props) => {
	const {
		className: classNames = '',
		required,
		onChange,
		children,
		value,
		name = '',
		disabled,
		// label,
		...attrs
	} = props;

	const [selfValue, setSelfValue] = React.useState(value);
	const radioChange: RadioOnChangeType = (ev) => {
		setSelfValue(ev);
		onChange?.(ev);
		console.log('selfValue', selfValue);
	};

	React.useEffect(() => {
		setSelfValue(value);
	}, [value]);

	return (
		<RadioContext.Provider
			value={{
				onChange: radioChange,
				value: selfValue,
				name,
				required,
				disabled,
			}}
		>
			{children}
		</RadioContext.Provider>
	);
};

RadioGroup.displayName = 'VtaRadioGroup';

export default RadioGroup;
