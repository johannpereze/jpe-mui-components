/// <reference types="react" />
import { FormikProps } from 'formik';
interface TextFieldProps {
    formik: FormikProps<any>;
    name: string;
    fullWidth?: boolean;
    label?: string | null;
    value?: string;
    type?: 'text' | 'number';
}
declare function TextField({ formik, name, fullWidth, label, value, type }: TextFieldProps): JSX.Element;
declare namespace TextField {
    var defaultProps: {
        fullWidth: boolean;
        label: null;
        type: string;
        value: null;
        name: string;
    };
}
export default TextField;
