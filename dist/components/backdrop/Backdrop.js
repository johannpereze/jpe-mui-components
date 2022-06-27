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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
function Backdrop() {
    return ((0, jsx_runtime_1.jsx)(material_1.Backdrop, __assign({ sx: { color: '#fff', zIndex: function (theme) { return theme.zIndex.drawer + 1; } }, open: true }, { children: (0, jsx_runtime_1.jsx)(material_1.CircularProgress, { color: 'primary' }) })));
}
exports.default = Backdrop;
