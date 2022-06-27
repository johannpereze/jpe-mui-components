/// <reference types="react" />
import { FormikProps } from 'formik';
interface TextFieldProps {
    formik: FormikProps<any>;
    name: string;
    fullWidth?: boolean;
    label?: string | null;
}
declare function PasswordField({ formik, name, fullWidth, label }: TextFieldProps): JSX.Element;
declare namespace PasswordField {
    var defaultProps: {
        fullWidth: boolean;
        label: null;
    };
}
export default PasswordField;
