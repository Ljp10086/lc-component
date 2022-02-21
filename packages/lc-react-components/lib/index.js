import React from 'react';

// ButtonProps & 
const Button = React.forwardRef((props, ref) => {
    const { children } = props;
    const buttonRef = ref || React.createRef();
    return (React.createElement("button", { ref: buttonRef }, children));
});
Button.displayName = 'Button';

export { Button };
