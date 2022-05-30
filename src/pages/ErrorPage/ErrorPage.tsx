import React from 'react';

import { ErrorComponent } from 'components';
import styles from "./ErrorPage.module.scss";

interface IErrorPage {
  statusCode: number,
  title: string,
  description: string
}

const ErrorPage: React.FC<IErrorPage> = ({
  statusCode,
  title,
  description
}) => {
  return (
    <div className={styles.errorPage}>
      <ErrorComponent
        statusCode={statusCode}
        title={title}
        description={description}
      />
    </div>
  )
}

export default ErrorPage;