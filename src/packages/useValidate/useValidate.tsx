import { useState, ChangeEvent, FocusEvent } from 'react';

import type { IUseValidateProps, IErrors } from './types';

const useValidate = <T extends Record<keyof T, any> = {}>({ formFields, validations, onSubmit }: IUseValidateProps<T>) => {
    const [isValid, setValid] = useState<boolean>(false);
    const [fields, setFields] = useState<T>(formFields || {} as T);
    const [errors, setErrors] = useState<IErrors<T> | object>({});

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
            const errors = validate(key as keyof T, value);
            setErrors((prev) => {
                return {
                    ...prev,
                    ...errors
                }
            })
        }
    }

    const validate = (key: keyof T, value: string) => {
        if(validations[key]) {
            const errors: IErrors<T> = {};
            const requiredValid = validations[key]?.required?.value ? value.length > 0 : true;
            if(!requiredValid) {
                errors[key] = validations[key].required?.message;
                return errors
            }
            const regExpPattern = new RegExp(validations[key].pattern!.value);
            const patternValid = validations[key]?.pattern ? regExpPattern.test(value) : true;
            if(!patternValid) {
                errors[key] = validations[key].pattern?.message
                return errors
            }
        }
    }

    const handleSubmit = (e: Event) => {
        e.preventDefault();

        if(validations) {
            let errors: IErrors<T> = {};

            for(const key in fields) {
                const value = fields[key];

                const elementErrors = validate(key, value);
                errors = {...errors, ...elementErrors}
            }

            if(Object.keys(errors).length <= 0) {
                setValid(true);
                onSubmit(fields);
            }
        }
    }

    return {
        handleChange,
        isValid,
        handleBlur,
        errors,
        handleSubmit,
        fields
    }
}

export default useValidate;