import React from 'react';

import useValidate from 'packages/useValidate/useValidate';
import { validations } from 'constants/Validations/validations';
import { Input, Label, Button } from "components";

import styles from "./LoginForm.module.scss";
import classNames from 'classnames';

const formFields = {
    username: "",
    password: ""
}

interface ILoginForm {
    onSubmit: (data: IUserLogin) => void
}

export interface IUserLogin {
    username: string,
    password: string
}

const LoginForm: React.FC<ILoginForm> = ({ onSubmit }) => {

    const { 
        handleChange, 
        handleBlur, 
        errors,
        fields,
        handleSubmit,
        handleFocus
    } = useValidate({
        formFields, 
        validations: {username: validations.email, password: validations.password}, 
        onSubmit: loginHandler
    });

    function loginHandler(data:IUserLogin) {
        onSubmit(data)
    }

    return ( 
        <form className={styles.form}>
            <div className={styles.formItem}>
                <Label className={styles.formLabel}>
                    Почта
                    <Input
                        className={classNames(styles.formInput, {
                            [styles.formInputInvalid]: errors.username
                        })} 
                        placeholder='Ваш Email'
                        type='email'
                        name='username'
                        value={fields.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                    />
                </Label>
                <div className={classNames("error-text", styles.formError)}>{errors.username && errors.username}</div>
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
                        onFocus={handleFocus}
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
                <Button 
                    onClick={handleSubmit}
                    className={styles.formFooterBtn} 
                    apperance={"default"}
                >Войти</Button>
            </div>
        </form>
    )
}

export default LoginForm;