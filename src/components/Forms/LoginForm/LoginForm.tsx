import React from 'react';

import useValidate from 'packages/useValidate';
import { validations } from 'constants/Validations/validations';
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
        errors 
    } = useValidate({
        formFields, 
        validations: {email: validations.email, password: validations.password}, 
        onSubmit: handleSubmit
    });

    function handleSubmit(data:IUserLogin) {
        onSubmit(data)
    }

    return (
        <form>
            
        </form>
    )
}

export default LoginForm;