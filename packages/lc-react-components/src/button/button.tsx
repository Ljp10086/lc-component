import React from 'react';

type ButtonTypes =
  | 'default'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'abort'
  | 'secondary-light'
  | 'success-light'
  | 'warning-light'
  | 'error-light';

interface ButtonProps {
  type?: ButtonTypes
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

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (props, buttonRef) => {
	const { children, htmlType } = props;
	return (<button type={htmlType} ref={buttonRef}>{children}</button>);
};

Button.displayName = 'Button';

export default React.forwardRef(Button);
