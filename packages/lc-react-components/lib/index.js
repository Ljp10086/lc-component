import * as React from 'react';
import React__default, { useRef, useState } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const isObject = (value) => value.toString() === '[object Object]';
const parseObjToStr = (classNameObj) => {
    const keys = Object.keys(classNameObj);
    let str = '';
    keys.forEach((objKey) => {
        const objValue = classNameObj[objKey];
        if (objValue) {
            str = str ? `${str} ${objKey}` : `${objKey}`;
        }
    });
    return str;
};
const useClasses = (...classNames) => {
    const classNameStr = React.useMemo(() => classNames.reduce((str, className) => {
        if (isObject(className)) {
            str = str
                ? `${str} ${parseObjToStr(className)}`
                : `${parseObjToStr(className)}`;
        }
        else {
            str = str ? `${str} ${className}` : `${className}`;
        }
        return str;
    }, ''), [...classNames]);
    return classNameStr.trim();
};

const StatusDot = (props) => {
    const { state = 'default', className: classNames = '', label } = props, attrs = __rest(props, ["state", "className", "label"]);
    const classes = useClasses('dot', `dot-${state}`);
    return (React.createElement("span", Object.assign({ className: useClasses('dot-wrapper', classNames) }, attrs),
        React.createElement("span", { className: classes }),
        label && React.createElement("span", { className: "label" }, label)));
};
StatusDot.displayName = 'VtaStatusDot';

const Loading = (props) => {
    const { size = 1, className = '', children } = props, attrs = __rest(props, ["size", "className", "children"]);
    const classes = useClasses('vta-loading', className);
    const iconStyle = React.useMemo(() => {
        const loadingSize = size / 4;
        return { width: `${loadingSize}rem`, height: `${loadingSize}rem` };
    }, [size]);
    return (React.createElement("span", Object.assign({ className: classes }, attrs),
        React.createElement("i", { style: iconStyle }),
        React.createElement("i", { style: iconStyle }),
        React.createElement("i", { style: iconStyle })));
};
Loading.displayName = 'VtaLoading';

const Button = React__default.forwardRef((props, ref) => {
    const { size, shape, type = 'default', children, variant, htmlType = 'button', className: classNames = '', onClick, disabled, loading, prefix, suffix } = props, attrs = __rest(props, ["size", "shape", "type", "children", "variant", "htmlType", "className", "onClick", "disabled", "loading", "prefix", "suffix"]);
    const buttonRef = ref || React__default.createRef();
    const classes = useClasses('vta-btn', `vta-btn-${type}`, {
        [`vta-btn-${shape}`]: shape,
        [`vta-btn-${size}`]: size,
        'vta-btn-ghost': variant === 'ghost',
        'vta-btn-shadow': variant === 'shadow',
        'vtn-button-pointer': loading,
    }, classNames);
    const waveRef = useRef(null);
    const [longWidth, setLongWidth] = useState(0);
    const [drip, setDrip] = useState({ x: 0, y: 0 });
    const [isWaving, setisWaving] = useState(false);
    const handleClick = (e) => {
        var _a, _b, _c;
        if (disabled || loading) {
            e.preventDefault();
            return;
        }
        if (!isWaving) {
            setisWaving(true);
            const longWidth = Math.max((_a = buttonRef === null || buttonRef === void 0 ? void 0 : buttonRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth, (_b = buttonRef === null || buttonRef === void 0 ? void 0 : buttonRef.current) === null || _b === void 0 ? void 0 : _b.offsetHeight);
            setLongWidth(longWidth);
            const rect = (_c = waveRef === null || waveRef === void 0 ? void 0 : waveRef.current) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect();
            if (rect) {
                setDrip({
                    x: e.pageX - rect.x - longWidth / 2,
                    y: e.pageY - rect.y - longWidth / 2,
                });
            }
        }
        onClick === null || onClick === void 0 ? void 0 : onClick(e);
    };
    const handleWaveAnimationComplete = () => {
        setisWaving(false);
    };
    return (React__default.createElement("button", Object.assign({}, attrs, { type: htmlType, disabled: disabled, onClick: handleClick, className: classes, ref: buttonRef }),
        loading && (React__default.createElement("span", { className: "vta-btn-loading" },
            React__default.createElement(Loading, null))),
        prefix && React__default.createElement("span", { className: "vta-btn-prefix" }, prefix),
        React__default.createElement("span", null, children),
        suffix && React__default.createElement("span", { className: "vta-btn-suffix" }, suffix),
        React__default.createElement("span", { ref: waveRef, className: "wave-wrapper" },
            React__default.createElement("div", { onAnimationEnd: () => handleWaveAnimationComplete(), className: useClasses('wave', { rippleEffect: isWaving }), style: {
                    height: longWidth + 'px',
                    width: longWidth + 'px',
                    top: drip.y + 'px',
                    left: drip.x + 'px',
                } }))));
});
Button.displayName = 'VtaButton';

const Badge = (props) => {
    const { type, children, outline, variant, size } = props;
    const classes = useClasses('vta-badge', `vta-badge-${size}`, {
        [`vta-badge-${type}`]: type,
        [`vta-badge-contrast`]: variant === 'contrast',
        [`vta-badge-outline`]: outline,
    });
    return (React__default.createElement("div", { className: classes },
        React__default.createElement("span", null, children)));
};
Badge.displayName = 'VtaBadge';

const ContainerContext = React__default.createContext({});

const GridContainer = (props) => {
    const { justify, alignItems, wrap, gap, children, className = '', style } = props, attrs = __rest(props, ["justify", "alignItems", "wrap", "gap", "children", "className", "style"]);
    const styles = {
        justifyContent: justify,
        alignItems,
        flexWrap: wrap,
    };
    if (gap) {
        if (Array.isArray(gap)) {
            const rowGap = gap[0];
            styles.rowGap = rowGap;
            const columnGap = gap[1];
            styles.marginLeft = -columnGap;
            styles.marginRight = -columnGap;
        }
        else {
            const rowGap = gap;
            styles.rowGap = rowGap;
            const columnGap = gap;
            styles.marginLeft = -columnGap;
            styles.marginRight = -columnGap;
        }
    }
    const classes = useClasses('vta-grid-container');
    return (React__default.createElement(ContainerContext.Provider, { value: { gap } },
        React__default.createElement("div", Object.assign({ style: Object.assign(Object.assign({}, style), styles), className: classes }, attrs), children)));
};

const Grid = (props) => {
    const { xs, sm, md, lg, xl, children, className = '', style } = props, attrs = __rest(props, ["xs", "sm", "md", "lg", "xl", "children", "className", "style"]);
    const { gap } = React__default.useContext(ContainerContext);
    const classes = useClasses('vta-grid', {
        [`vta-grid-xs-${xs}`]: xs,
        [`vta-grid-sm-${sm}`]: sm,
        [`vta-grid-md-${md}`]: md,
        [`vta-grid-lg-${lg}`]: lg,
        [`vta-grid-xl-${xl}`]: xl,
    });
    const mergedStyle = {};
    if (gap) {
        const gutter = Array.isArray(gap) ? gap[1] : gap;
        mergedStyle.paddingLeft = gutter;
        mergedStyle.paddingRight = gutter;
    }
    return (React__default.createElement("div", { className: classes, style: Object.assign({}, mergedStyle) },
        React__default.createElement("div", Object.assign({ className: className }, attrs, { style: Object.assign({}, style) }), children)));
};
Grid.displayName = 'VtaGrid';

const Link = (props) => {
    const { className: classNames = '', children, variant } = props, attrs = __rest(props, ["className", "children", "variant"]);
    const classes = useClasses('vta-link', {
        [`vta-link-${variant}`]: variant,
    }, classNames);
    return (React__default.createElement("a", Object.assign({}, attrs, { className: classes }), children));
};
Link.displayName = 'VtaLink';

const Checkbox = React.forwardRef((props, ref) => {
    const { className: classNames = '', checked = false, onChange, children, fullWidth, disabled, label } = props, attrs = __rest(props, ["className", "checked", "onChange", "children", "fullWidth", "disabled", "label"]);
    const checkboxRef = ref || React.createRef();
    const hasChildren = React.Children.count(children) !== 0 && children;
    const classes = useClasses(classNames, 'vta-checkbox', {
        'vta-checkbox-disabled': disabled,
        'vta-checkbox-fullWidth': fullWidth,
    });
    const displayBoxClasses = useClasses('vta-checkbox-display-box', {
        'vta-checkbox-display-box-checked': checked,
        'vta-checkbox-checked': checked,
    });
    const handleChange = (e) => {
        if (disabled) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(e);
    };
    return (React.createElement("div", null,
        label && React.createElement("div", { className: "vta-checkbox-label" }, label),
        React.createElement("label", { className: classes },
            React.createElement("input", Object.assign({ disabled: disabled, onChange: handleChange }, attrs, { className: "vta-checkbox-ele", type: "checkbox", ref: checkboxRef })),
            React.createElement("span", { className: displayBoxClasses }),
            hasChildren && React.createElement("span", { className: "vta-checkbox-text" }, children))));
});
Checkbox.displayName = 'VtaCheckbox';

const RadioContext = React__default.createContext({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Radio = React.forwardRef((props, ref) => {
    const { className: classNames = '', value, checked, required, onChange, children, disabled, name } = props, attrs = __rest(props, ["className", "value", "checked", "required", "onChange", "children", "disabled", "name"]);
    const context = React.useContext(RadioContext);
    const [isChecked, setIsChecked] = React.useState(Boolean(checked));
    const hasChildren = React.Children.count(children) !== 0 && children;
    const classes = useClasses('vta-radio', classNames, {
        'vta-radio-disabled': disabled !== null && disabled !== void 0 ? disabled : context.disabled,
    });
    const displayBoxClasses = useClasses('vta-radio-display-box', {
        'vta-radio-checked': isChecked,
    });
    React.useEffect(() => {
        setIsChecked(value == context.value);
    }, [context.value]);
    const handleChange = (ev) => {
        var _a;
        if (disabled) {
            ev.preventDefault();
            ev.stopPropagation();
            return;
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(ev);
        (_a = context.onChange) === null || _a === void 0 ? void 0 : _a.call(context, ev.target.value);
    };
    return (React.createElement("label", { className: classes },
        React.createElement("input", Object.assign({ checked: isChecked, className: "vta-radio-element", onChange: handleChange, type: "radio", value: value, required: required !== null && required !== void 0 ? required : context.required, disabled: disabled !== null && disabled !== void 0 ? disabled : context.disabled, name: name !== null && name !== void 0 ? name : context.name }, attrs)),
        React.createElement("span", { className: displayBoxClasses }),
        hasChildren && React.createElement("span", { className: "vta-radio-text" }, children)));
});
Radio.displayName = 'VtaRadio';

const RadioGroup = (props) => {
    const { className: classNames = '', required, onChange, children, value, name = '', disabled,
    // label,
     } = props;
    const [selfValue, setSelfValue] = React.useState(value);
    const radioChange = (ev) => {
        setSelfValue(ev);
        onChange === null || onChange === void 0 ? void 0 : onChange(ev);
        console.log('selfValue', selfValue);
    };
    React.useEffect(() => {
        setSelfValue(value);
    }, [value]);
    return (React.createElement(RadioContext.Provider, { value: {
            onChange: radioChange,
            value: selfValue,
            name,
            required,
            disabled,
        } }, children));
};
RadioGroup.displayName = 'VtaRadioGroup';

const TextField = React__default.forwardRef((props, ref) => {
    const { before, after, className: classNames = '', size, prefix, suffix, disabled, onFocus, onBlur } = props, attrs = __rest(props, ["before", "after", "className", "size", "prefix", "suffix", "disabled", "onFocus", "onBlur"]);
    const [isFocus, setIsFocus] = React__default.useState(false);
    const classes = useClasses('vta-text-field');
    const inputWrapperClasses = useClasses('vta-text-field-base', classNames, {
        'vta-text-field-focus': isFocus,
        [`vta-text-field-disabled`]: disabled,
        [`vta-text-field-${size}`]: size,
    });
    const wrapperRef = useRef(null);
    const inputRef = ref || React__default.createRef();
    const handleFocus = (e) => {
        setIsFocus(true);
        onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
    };
    const handleBlur = (e) => {
        setIsFocus(false);
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
    };
    const handleWrapperClick = () => {
        inputRef.current.focus();
    };
    return (React__default.createElement("div", { className: classes },
        !!before && React__default.createElement("div", { className: "vta-text-field-before" }, before),
        React__default.createElement("div", { onClick: handleWrapperClick, ref: wrapperRef, className: inputWrapperClasses },
            !!prefix && React__default.createElement("div", { className: "vta-text-field-prefix" }, prefix),
            React__default.createElement("input", Object.assign({ onFocus: handleFocus, onBlur: handleBlur, ref: inputRef, className: "vta-text-field-self", type: "text" }, attrs)),
            !!suffix && React__default.createElement("div", { className: "vta-text-field-suffix" }, suffix)),
        !!after && React__default.createElement("div", { className: "vta-text-field-after" }, after)));
});
TextField.displayName = 'VtaTextField';

export { Badge, Button, Checkbox, GridContainer as Container, Grid, Link, Loading, Radio, RadioGroup, StatusDot, TextField, useClasses };
