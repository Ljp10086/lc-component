import React from 'react';
declare type ButtonTypes = 'default' | 'secondary' | 'success' | 'warning' | 'error' | 'abort' | 'secondary-light' | 'success-light' | 'warning-light' | 'error-light';
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
}
declare const _default: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default _default;
