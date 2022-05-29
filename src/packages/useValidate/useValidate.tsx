import { useState, ChangeEvent, FocusEvent } from 'react';

import type { IUseValidateProps, IErrors, IValidations, IValidationPattern} from './types';


const useValidate = <T extends Record<keyof T, any> = {}>({ formFields, validations, onSubmit }: IUseValidateProps<T>) => {
    const [isValid, setValid] = useState<boolean>(false);
    const [fields, setFields] = useState<Record<keyof T, any>>(formFields || {} as T);
    const [errors, setErrors] = useState<IErrors<T>>({});

    const deleteError = (errors: IErrors<T>, key: keyof T) => {
        const newErrors = {...errors};
        delete newErrors[key];
        setErrors(newErrors);
        return newErrors;
    }

    const requiredValid = (validationKey: IValidations<T>[keyof T], value: string | number) => {
        return validationKey?.required?.value ? value.toString().length > 0 : true;
    }

    const patternValidate = (validationKey: IValidations<T>[keyof T], pattern: IValidationPattern, value: string) => {
        if(pattern.value instanceof Function) {
            return pattern.value(value);
        } else {
            const regExpPattern = new RegExp(pattern?.value);
            return validationKey?.pattern ? regExpPattern.test(value) : true;
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const key = e.target.name;
        setFields((prev) => {
            return {
                ...prev,
                [key]: e.target.value
            }
        })
    }

    const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
        const key = e.target.name;
        if(fields.hasOwnProperty(key)) {
            const value = e.target.value;

            const validationErrors = handleValidate(key as keyof T, value);
            setErrors((prev) => {
                return {
                    ...prev,
                    ...validationErrors
                }
            })
        }
    }

    const handleValidate = (key: keyof T, value: string) => {
        const validationKey = validations[key];
        const validateErrors: IErrors<T> = {...errors};

        if(validationKey) {
            if(!requiredValid(validationKey, value)) {
                return {
                    ...validateErrors,
                    [key]: validationKey.required?.message
                }
            } else if(validateErrors[key]) {
                return deleteError(validateErrors, key)
            }
            if(!validationKey?.pattern?.value) {
                return validateErrors;
            }
            
            const patternValid = patternValidate(validationKey, validationKey.pattern, value);
            if(!patternValid) {
                return {
                    ...validateErrors,
                    [key]: validationKey.pattern.message
                }
            } else {
                deleteError(validateErrors, key)
            }
                
        }

    }

    const handleFocus = (e: FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
        const key = e.target.name;
        deleteError(errors, key as keyof T)
    }

    const handleSubmit = (e: Event) => {
        e.preventDefault();

        if(validations) {
            let errors: IErrors<T> = {};

            for(const key in fields) {
                const value = fields[key];
                
                const elementErrors = handleValidate(key, value);
                errors = {...errors, ...elementErrors}
            }

            if(Object.keys(errors).length <= 0) {
                setValid(true);
                onSubmit(fields);
            } else {
                setValid(false);
                setErrors(errors)
            }
        }
    }

    return {
        handleChange,
        handleFocus,
        handleBlur,
        handleSubmit,
        isValid,
        errors,
        fields
    }
}

export default useValidate;