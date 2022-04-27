import React from 'react';

import useValidate from 'packages/useValidate/useValidate';
import { validations } from 'constants/Validations/validations';
import { Input, Label, Button } from "components";

import styles from "./LoginForm.module.scss";
import classNames from 'classnames';

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
        validations: {email: validations.email, password: validations.password}, 
        onSubmit: handleSubmit
    });

    function handleSubmit(data:IUserLogin) {
        onSubmit(data)
    }

    return ( 
        <form className={styles.form}>
            <div className={styles.formItem}>
                <Label className={styles.formLabel}>
                    Почта
                    <Input
                        className={classNames(styles.formInput, {
                            [styles.formInputInvalid]: errors.email
                        })} 
                        placeholder='Ваш Email'
                        type='email'
                        name='email'
                        value={fields.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Label>
                <div className={classNames("error-text", styles.formError)}>{errors.email && errors.email}</div>
            </div>
            <div className={styles.formItem}>
                <Label className={styles.formLabel}>
                    Пароль
                    <Input
                        className={classNames(styles.formInput, {
                            [styles.formInputInvalid]: errors.password
                        })}
                        placeholder='Пароль'
                        type='password'
                        name='password'
                        value={fields.password}
                        onChange={handleChange} 
                        onBlur={handleBlur}
                    />
                    <div className={classNames("error-text", styles.formError)}>{errors.password && errors.password}</div>
                </Label>
            </div>
            <div className={styles.formFooter}>
                <a  
                    className={styles.formFooterLink}
                    href='https://github.com/ignatiqq' 
                    rel="noreferrer" 
                    target="_blank"
                >Запросить доступ</a>
                <Button className={styles.formFooterBtn} apperance="default" >Войти</Button>
            </div>
        </form>
    )
}

export default LoginForm;