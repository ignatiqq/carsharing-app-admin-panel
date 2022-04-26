import { useCallback } from 'react';

import type { IUserLogin } from 'components/Forms/LoginForm/LoginForm';
import { LoginFrom } from 'components';
import styles from "./Login.module.scss";


const Login = () => {

    const authorizationHandler = useCallback((data: IUserLogin) => {
      console.log(data)
    }, [])

    return (
      <div className={styles.wrapper}>
        <LoginFrom
          onSubmit={authorizationHandler}
        />
      </div>
    )
}

export default Login