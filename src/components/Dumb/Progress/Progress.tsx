import classNames from 'classnames';
import React from 'react';

import styles from "./Progress.module.scss";

interface IProgressComponent {
    title?: string,
    max?: number,
    value?: number,
    className?: string
}

const Progress: React.FC<IProgressComponent> = ({
    title,
    max = 100,
    value = 0,
    className
}) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
        <div className={styles.textWrapper}>
            <div className={styles.title}>{title}</div>
            <div className={styles.textProgress}>{value}%</div>
        </div>
        <progress className={styles.progress} value={value} max={max}>{value} %</progress>
    </div>
  )
}

export default Progress;