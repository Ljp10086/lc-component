import React, { Context } from 'react';

export interface ContainerContextState {
	gap?: number | number[];
}

export const ContainerContext: Context<ContainerContextState> =
	React.createContext({});
