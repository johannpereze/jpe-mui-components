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
exports.Select = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var system_1 = require("@mui/system");
var dot_object_1 = require("dot-object");
var formik_1 = require("formik");
// TODO: make default
function Select(_a) {
    var label = _a.label, options = _a.options, formik = _a.formik, name = _a.name, size = _a.size, variant = _a.variant;
    var form = formik ||
        (0, formik_1.useFormik)({
            initialValues: {
                componentName: "",
            },
            onSubmit: function () { },
        });
    var handleChange = function (event) {
        form.setFieldValue(name, event.target.value);
    };
    return ((0, jsx_runtime_1.jsx)(system_1.Box, __assign({ sx: { width: "120px" } }, { children: (0, jsx_runtime_1.jsxs)(material_1.FormControl, __assign({ fullWidth: true, size: size, variant: variant }, { children: [(0, jsx_runtime_1.jsx)(material_1.InputLabel, __assign({ id: "simple-select-label" }, { children: label || "label" })), (0, jsx_runtime_1.jsx)(material_1.Select, __assign({ labelId: "simple-select-label", fullWidth: true, value: (0, dot_object_1.pick)(name, form.values), label: label || "label", onChange: handleChange }, { children: options.map(function (_a) {
                        var value = _a.value, label = _a.label;
                        return ((0, jsx_runtime_1.jsx)(material_1.MenuItem, __assign({ value: value }, { children: label }), value));
                    }) }))] })) })));
}
exports.Select = Select;
Select.defaultProps = {
    label: "label",
    size: "medium",
    options: [
        { value: "Option A", label: "Option A" },
        { value: "Option B", label: "Option B" },
        { value: "Option C", label: "Option C" },
    ],
    name: "componentName",
    variant: "outlined",
};
