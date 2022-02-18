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
  ghost?: boolean
  loading?: boolean
  shadow?: boolean
  auto?: boolean
  effect?: boolean
  disabled?: boolean
  htmlType?: React.ButtonHTMLAttributes<any>['type']
  icon?: React.ReactNode
  iconRight?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
}

const Button = React.forwardRef<HTMLButtonElement>((props, buttonRef) => {
  const { children } = props;
  return (<button ref={buttonRef}>{children}</button>);
})

export default Button;
