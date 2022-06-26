import React from 'react';

import styles from "../ChangeEssence.module.scss";

interface IChangeComponentWrapper {
    title: string,
    children: React.ReactElement
}

const ChangeComponentWrapper: React.FC<IChangeComponentWrapper> = ({
    title,
    children
}) => {
  return (
    <>
        <h1 className={styles.changeEssense__title}>{title}</h1>
        {children}
    </>
  )
}

export default ChangeComponentWrapper;