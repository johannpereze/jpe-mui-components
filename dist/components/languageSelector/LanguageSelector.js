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
var react_i18next_1 = require("react-i18next");
function LanguageSelector() {
    var _a = (0, react_i18next_1.useTranslation)(), t = _a.t, i18n = _a.i18n;
    var lngs = {
        en: { nativeName: 'English' },
        es: { nativeName: 'Spanish' }
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(material_1.FormControl, __assign({ fullWidth: true }, { children: [(0, jsx_runtime_1.jsx)(material_1.InputLabel, __assign({ id: 'language-selector-select' }, { children: t('general.language') })), (0, jsx_runtime_1.jsx)(material_1.Select, __assign({ labelId: 'language-selector-select', fullWidth: true, size: 'small', name: 'language', label: 'Language', value: i18n.resolvedLanguage, onChange: function (e) { return i18n.changeLanguage(e.target.value); } }, { children: Object.keys(lngs).map(function (lng) { return ((0, jsx_runtime_1.jsx)(material_1.MenuItem, __assign({ value: lng }, { children: t("general.".concat(lng)) }), lng)); }) }))] })) }));
}
exports.default = LanguageSelector;
