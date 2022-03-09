import React from 'react';

export type RadioValueType =
	| string
	| ReadonlyArray<string>
	| number
	| undefined;
export type RadioOnChangeType = (value: RadioValueType) => void;
interface RadioContextType {
	required?: boolean;
	disabled?: boolean;
	value?: RadioValueType;
	onChange?: RadioOnChangeType;
	name?: string;
}

export const RadioContext: React.Context<RadioContextType> =
	React.createContext({});
