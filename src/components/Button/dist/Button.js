"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var Button_module_scss_1 = require("./Button.module.scss");
var primary = Button_module_scss_1["default"].primary;
var Button = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#fff" : _b, _c = _a.bgColor, bgColor = _c === void 0 ? "#7F2972" : _c, _d = _a.fontSize, fontSize = _d === void 0 ? 25 : _d, _e = _a.border, border = _e === void 0 ? "1px solid #7F2972" : _e, _f = _a.borderRadius, borderRadius = _f === void 0 ? 5 : _f, _g = _a.fontFamily, fontFamily = _g === void 0 ? "'Times New Roman', sans-serif" : _g, _h = _a.width, width = _h === void 0 ? 100 : _h, _j = _a.height, height = _j === void 0 ? 50 : _j, children = _a.children, onClick = _a.onClick, type = _a.type, _k = _a.disabled, disabled = _k === void 0 ? false : _k, className = _a.className, style = _a.style, onMouseDown = _a.onMouseDown, onMouseUp = _a.onMouseUp, onMouseLeave = _a.onMouseLeave, onMouseEnter = _a.onMouseEnter, onMouseMove = _a.onMouseMove, onMouseOut = _a.onMouseOut, onMouseOver = _a.onMouseOver;
    return (React.createElement("button", { type: type, onClick: onClick, onMouseDown: onMouseDown, onMouseUp: onMouseUp, onMouseLeave: onMouseLeave, onMouseEnter: onMouseEnter, onMouseMove: onMouseMove, onMouseOut: onMouseOut, onMouseOver: onMouseOver, disabled: disabled, style: __assign(__assign({ borderRadius: borderRadius, border: border, backgroundColor: bgColor, color: color, width: width, height: height, fontFamily: fontFamily, fontSize: fontSize }, style), { cursor: disabled ? 'not-allowed' : 'pointer' }), className: Button_module_scss_1["default"].button + " " + (className ? className : '') }, children));
};
exports["default"] = Button;
