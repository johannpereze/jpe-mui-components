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
var icons_material_1 = require("@mui/icons-material");
var material_1 = require("@mui/material");
var dot_object_1 = require("dot-object");
var react_1 = require("react");
function PasswordField(_a) {
    var formik = _a.formik, name = _a.name, fullWidth = _a.fullWidth, label = _a.label;
    var _b = (0, react_1.useState)(false), showPassword = _b[0], setShowPassword = _b[1];
    var handleClickShowPassword = function () {
        setShowPassword(!showPassword);
    };
    var handleMouseDownPassword = function (event) {
        event.preventDefault();
    };
    return ((0, jsx_runtime_1.jsxs)(material_1.FormControl, __assign({ variant: 'outlined' }, { children: [(0, jsx_runtime_1.jsx)(material_1.InputLabel, __assign({ error: (0, dot_object_1.pick)(name, formik.touched) && Boolean((0, dot_object_1.pick)(name, formik.errors)), htmlFor: name }, { children: label })), (0, jsx_runtime_1.jsx)(material_1.OutlinedInput, { fullWidth: fullWidth, id: name, type: showPassword ? 'text' : 'password', name: name, label: label, value: (0, dot_object_1.pick)(name, formik.values), onChange: formik.handleChange, error: (0, dot_object_1.pick)(name, formik.touched) && Boolean((0, dot_object_1.pick)(name, formik.errors)), onBlur: function () { return formik.setFieldTouched(name, true); }, endAdornment: (0, jsx_runtime_1.jsx)(material_1.InputAdornment, __assign({ position: 'end' }, { children: (0, jsx_runtime_1.jsx)(material_1.IconButton, __assign({ "aria-label": 'toggle password visibility', onClick: handleClickShowPassword, onMouseDown: handleMouseDownPassword, edge: 'end' }, { children: showPassword ? (0, jsx_runtime_1.jsx)(icons_material_1.VisibilityOff, {}) : (0, jsx_runtime_1.jsx)(icons_material_1.Visibility, {}) })) })) }), (0, dot_object_1.pick)(name, formik.touched) && Boolean((0, dot_object_1.pick)(name, formik.errors)) && ((0, jsx_runtime_1.jsx)(material_1.FormHelperText, __assign({ error: true }, { children: (0, dot_object_1.pick)(name, formik.errors) })))] })));
}
exports.default = PasswordField;
PasswordField.defaultProps = {
    fullWidth: false,
    label: null
};
