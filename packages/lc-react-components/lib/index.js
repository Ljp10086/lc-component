import React from 'react';

var Button = function (props, buttonRef) {
    var children = props.children, htmlType = props.htmlType;
    return (React.createElement("button", { type: htmlType, ref: buttonRef }, children));
};
Button.displayName = 'Button';
var button = React.forwardRef(Button);

export { button as Button };
