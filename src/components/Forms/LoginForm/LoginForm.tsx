import React from 'react';

import useValidate from 'packages/useValidate/useValidate';
import { validations } from 'constants/Validations/validations';
import { Input, Label } from "components";
import Logo from "assets/images/Logo.svg";
import styles from "LoginForm.module.scss";

const formFields = {
    email: "",
    password: ""
}

interface ILoginForm {
    onSubmit: (data: IUserLogin) => void
}

export interface IUserLogin {
    email: string,
    password: string
}

const LoginForm: React.FC<ILoginForm> = ({ onSubmit }) => {

    const {
        handleChange,
        handleBlur,
        isValid,
        errors,
        fields
    } = useValidate({
        formFields,
        validations: { email: validations.email, password: validations.password },
        onSubmit: handleSubmit
    });

    function handleSubmit(data: IUserLogin) {
        onSubmit(data)
    }

    console.log(isValid, fields, errors, validations.email)

    return (
        <form>
            <Label>
                Почта
                <Input
                    placeholder='Ваш Email'
                    type='email'
                    name='email'
                    value={fields.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </Label>
        </form>
    )
}

export default LoginForm;