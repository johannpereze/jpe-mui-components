"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var dot_object_1 = require("dot-object");
var formik_1 = require("formik");
function TextField(_a) {
    var formik = _a.formik, name = _a.name, fullWidth = _a.fullWidth, label = _a.label, value = _a.value, type = _a.type;
    var form = formik ||
        (0, formik_1.useFormik)({
            initialValues: {
                componentName: ''
            },
            onSubmit: function () { }
        });
    return ((0, jsx_runtime_1.jsx)(material_1.TextField, { fullWidth: fullWidth, name: name, label: label, value: value || (0, dot_object_1.pick)(name, form.values), onChange: form.handleChange, error: (0, dot_object_1.pick)(name, form.touched) && Boolean((0, dot_object_1.pick)(name, form.errors)), helperText: (0, dot_object_1.pick)(name, form.touched) && (0, dot_object_1.pick)(name, form.errors), onBlur: function () { return form.setFieldTouched(name, true); }, type: type }));
}
exports.default = TextField;
TextField.defaultProps = {
    fullWidth: false,
    label: null,
    type: 'text',
    value: null,
    name: 'componentName'
};
