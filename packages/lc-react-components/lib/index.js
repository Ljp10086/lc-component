import * as React from 'react';

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

export { Loading, StatusDot, useClasses };
