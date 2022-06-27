/// <reference types="react" />
import { FormikProps } from "formik";
export interface SelectProps {
    /**
     * This is the name for it's value in formik. must match formik definition
     */
    name: string;
    /**
     * This is the complete form from useFormik
     */
    formik: FormikProps<any>;
    /**
     * Must be an array of objects with value and label
     */
    options: {
        value: any;
        label: string;
    }[];
    label?: string;
    size?: "small" | "medium";
    variant?: "outlined" | "filled" | "standard";
}
export declare function Select({ label, options, formik, name, size, variant, }: SelectProps): JSX.Element;
export declare namespace Select {
    var defaultProps: {
        label: string;
        size: string;
        options: {
            value: string;
            label: string;
        }[];
        name: string;
        variant: string;
    };
}
