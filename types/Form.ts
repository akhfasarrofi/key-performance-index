import { FormEventHandler, ReactNode } from 'react';

export interface FormProviderProps {
    children?: ReactNode;
    methods?: any;
    onSubmit?: FormEventHandler<HTMLFormElement> | undefined;
}

export interface RHFCheckboxProps {
    name: string;
    label: string;
}

export interface RHFMultiCheckboxProps extends RHFCheckboxProps {
    options: Array<[]>;
}

export interface RHFTextFieldProps extends RHFCheckboxProps {
    type?: string;
    InputProps?: {
        endAdornment: JSX.Element;
    };
}
