import React from 'react';
import { createPortal } from 'react-dom';
import { usePortal } from './use-portal';

const ToastContainer = () => {
	const portal = usePortal();

	if (!portal) return null;

	return createPortal(<div>123</div>, portal);
};
