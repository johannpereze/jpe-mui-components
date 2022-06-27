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
exports.Standard = exports.Filled = exports.Outlined = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Select_1 = require("../../components/select/Select");
exports.default = {
    title: "UI/Select",
    component: Select_1.Select,
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(Select_1.Select, __assign({}, args)); };
exports.Outlined = Template.bind({});
exports.Filled = Template.bind({});
exports.Filled.args = {
    variant: "filled",
};
exports.Standard = Template.bind({});
exports.Standard.args = {
    variant: "standard",
};
