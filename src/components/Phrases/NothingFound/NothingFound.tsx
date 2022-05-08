import React from 'react';

import sadEmoji from "assets/images/sadEmoji.webp";
import styles from "./NothingFound.module.scss";
import classNames from 'classnames';

interface INothingFound {
  className?: string
}

const NothingFound: React.FC<INothingFound> = ({className}) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
        <div className={styles.wrapper__text}>Упс.. ничего не найдено</div>
        <img className={styles.wrapper__image} src={sadEmoji} alt="sad emoji" />
    </div>
  )
}

export default NothingFound;