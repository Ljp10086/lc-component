import React from 'react';
import './styles/button.less';
declare type ButtonTypes = 'default' | 'secondary' | 'success' | 'warning' | 'error' | 'cyan' | 'alert' | 'violet';
interface Props {
    prefix?: string | JSX.Element;
    suffix?: string | JSX.Element;
    type?: ButtonTypes;
    shape?: 'square' | 'circle';
    variant?: 'ghost' | 'shadow';
    loading?: boolean;
    disabled?: boolean;
    htmlType?: React.ButtonHTMLAttributes<unknown>['type'];
    icon?: React.ReactNode;
    iconRight?: React.ReactNode;
    className?: string;
    children?: React.ReactNode;
    size?: 'default' | 'small' | 'large';
    onClick?: React.DOMAttributes<unknown>['onClick'];
}
declare type NativeButtonProps = Omit<React.HTMLAttributes<HTMLButtonElement>, keyof Props>;
declare const Button: React.ForwardRefExoticComponent<Props & NativeButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;
