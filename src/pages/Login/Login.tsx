import React, { useState } from 'react';

import { validationPatterns } from 'constants/Validations/patterns';
import useValidate from "packages/useValidate";
import Logo from "assets/images/Logo.svg";
import styles from "./Login.module.scss";

const formFields = {
  email: "",
  password: ""
}

const validations = {
  email: {
    required: {
      value: true,
      message: "Это обязательное поле!"
    },
    pattern: {
      value: validationPatterns.emailPattern.value,
      message: validationPatterns.emailPattern.message
    }
  },
  password: {
    required: {
      value: true,
      message: "Это обязательное поле!"
    },
    pattern: {
      value: validationPatterns.passwordPattern.value,
      message: validationPatterns.passwordPattern.message
    }
  }
}

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const { 
      handleChange, 
      handleBlur, 
      isValid, 
      errors 
    } = useValidate({formFields, validations, onSubmit: authorizationHandler});

    function authorizationHandler() {
      
    }

    return (
      <div className={styles.wrapper}>
        <div>
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <div>
            <h3>Вход</h3>
          </div>
        </div>
      </div>
    )
}

export default Login