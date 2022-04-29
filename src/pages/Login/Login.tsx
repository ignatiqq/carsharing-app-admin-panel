import { useCallback } from 'react';

import { useAuthorization } from 'hooks';
import type { IUserLogin } from 'components/Forms/LoginForm/LoginForm';
import { LoginFrom } from 'components';
import Logo from "assets/images/Logo.svg";
import styles from "./Login.module.scss";


const Login = () => {

    const {loginHandler} = useAuthorization();

    const authorizationHandler = useCallback((data: IUserLogin) => {
      console.log(data)
      loginHandler(data);
    }, [])

    return (
      <div className={styles.wrapper}>
        <div>
          <div className={styles.logoWrapper}>
            <img src={Logo} alt="Логотип" />
          </div>
          <div className={styles.contentWrapper}>
            <h2 className={styles.loginTitle}>Вход</h2>
            <LoginFrom
              onSubmit={authorizationHandler}
            />
          </div>             
        </div>
      </div>
    )
}

export default Login