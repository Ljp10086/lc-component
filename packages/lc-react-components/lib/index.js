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
    const { size, shape, type = 'default', children, iconRight, icon, variant, htmlType = 'button', className: classNames = '', onClick, disabled, loading, prefix, suffix } = props, attrs = __rest(props, ["size", "shape", "type", "children", "iconRight", "icon", "variant", "htmlType", "className", "onClick", "disabled", "loading", "prefix", "suffix"]);
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
    const handleWaveAnimationComplete = (e) => {
        setisWaving(false);
    };
    return (React__default.createElement("button", Object.assign({}, attrs, { type: htmlType, disabled: disabled, onClick: handleClick, className: classes, ref: buttonRef }),
        loading && (React__default.createElement("span", { className: "vta-btn-loading" },
            React__default.createElement(Loading, null))),
        prefix && React__default.createElement("span", { className: "vta-btn-prefix" }, prefix),
        React__default.createElement("span", null, children),
        suffix && React__default.createElement("span", { className: "vta-btn-suffix" }, suffix),
        React__default.createElement("span", { ref: waveRef, className: "wave-wrapper" },
            React__default.createElement("div", { onAnimationEnd: (e) => handleWaveAnimationComplete(), className: useClasses('wave', { rippleEffect: isWaving }), style: {
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
        [`vta-link-${variant}`]: variant
    }, classNames);
    return React__default.createElement("a", Object.assign({}, attrs, { className: classes }), children);
};
Link.displayName = 'VtaLink';

export { Badge, Button, GridContainer as Container, Grid, Link, Loading, StatusDot, useClasses };
