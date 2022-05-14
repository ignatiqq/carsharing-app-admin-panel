import {memo} from 'react';

import type { IUserLogin } from 'components/Forms/LoginForm/LoginForm';
import { LoginFrom } from 'components';
import Logo from "assets/icons/Logo.svg";
import styles from "./Login.module.scss";
import withLoginLogic from './withLoginLogic';

export interface ILogin {
  authorizationHandler: (data: IUserLogin) => void,
  isUserLoginLoading: boolean,
  userLoginError: string | null
}

const Login: React.FC<ILogin> = ({ 
  authorizationHandler, 
  isUserLoginLoading,
  userLoginError
}) => {

    return (
      <div className={styles.wrapper}>
        <div>
          <div className={styles.logoWrapper}>
            <img src={Logo} alt="Логотип" />
          </div>
          <div className={styles.contentWrapper}>
            <h2 className={styles.loginTitle}>Вход</h2>
            {userLoginError && <div className={styles.loginError}>{userLoginError}</div>}
            <LoginFrom onSubmit={authorizationHandler} isUserLoginLoading={isUserLoginLoading} />
          </div>
        </div>
      </div>
    );
}

export default withLoginLogic(memo(Login));