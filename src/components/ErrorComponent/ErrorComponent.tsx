import React from 'react';
import { useNavigate } from "react-router-dom";

import { Button } from "components";

import styles from "./ErrorComponent.module.scss";

interface IErrorPage {
  statusCode?: number,
  title: string,
  description: string,
  fallbackUrl?: string
}

const ErrorPage: React.FC<IErrorPage> = ({
  statusCode = 500,
  title,
  description,
  fallbackUrl = "/"
}) => {

  const navigate = useNavigate();

  const goBackHandler = () => {
    return navigate(-1);
  }

  return (
    <div className={styles.error}>
      <div>
        <h1 className={styles.error__statusCode}>{statusCode}</h1>
        <h2 className={styles.error__title}>{title}</h2>
        <p className={styles.error__description}>{description}</p>
        <Button 
          onClick={goBackHandler}
          apperance="default"
        >
          Назад
        </Button>
      </div>
    </div>
  )
}

export default ErrorPage;