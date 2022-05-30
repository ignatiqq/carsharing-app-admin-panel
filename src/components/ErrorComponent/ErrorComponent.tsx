import React from 'react';
import { Link } from "react-router-dom";

import styles from "./ErrorComponent.module.scss";

interface IErrorPage {
  statusCode: number,
  title: string,
  description: string,
  fallbackUrl?: string
}

const ErrorPage: React.FC<IErrorPage> = ({
  statusCode,
  title,
  description,
  fallbackUrl = "/"
}) => {
  return (
    <div className={styles.error}>
      <div>
        <h1 className={styles.error__statusCode}>{statusCode}</h1>
        <h2 className={styles.error__title}>{title}</h2>
        <p className={styles.error__description}>{description}</p>
        <Link className='link-btn-filled' to={fallbackUrl}>Назад</Link>
      </div>
    </div>
  )
}

export default ErrorPage;