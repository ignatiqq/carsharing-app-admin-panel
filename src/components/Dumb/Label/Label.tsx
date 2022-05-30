import React from 'react';

import classNames from 'classnames';
import styles from "./Label.module.scss";

interface ILabel {
    children: React.ReactNode,
    className?: string
}

const Label: React.FC<ILabel> = ({children, className}) => {
  return (
    <label className={classNames(styles.label, className)}>
        {children}
    </label>
  )
}

export default Label