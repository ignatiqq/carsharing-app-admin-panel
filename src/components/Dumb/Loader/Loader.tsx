import React from 'react';
import classNames from "classnames";

import { ReactComponent as LoaderIcon } from "assets/icons/loader.svg";
import styles from "./Loader.module.scss";

interface ILoader {
    className?: string,
    description?: string,
}

const Loader: React.FC<ILoader> = ({ className, description }) => {
  return (
    <div className={styles.loaderWrapper}>
        <LoaderIcon className={classNames(className, styles.loading)} />
        {
            description &&
            <div className={styles.description}>{description}</div>
        }
    </div>
  )
}

export default Loader;