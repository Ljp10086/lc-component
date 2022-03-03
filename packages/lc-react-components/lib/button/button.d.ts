import React from 'react';
import './button.less';
declare type ButtonTypes = 'default' | 'secondary' | 'success' | 'warning' | 'error' | 'cyan' | 'alert' | 'violet';
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
declare type NativeButtonProps = Omit<React.HTMLAttributes<HTMLButtonElement>, keyof ButtonProps>;
declare const Button: React.ForwardRefExoticComponent<ButtonProps & NativeButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;
