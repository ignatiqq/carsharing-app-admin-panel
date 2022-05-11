import React from 'react';

import { Button } from "components";
import styles from "./SelectWrapper.module.scss";

interface ISelectWrapper {
    children: React.ReactElement,
    onApply?: (data?: any) => void,
    wrapperClassname?: string
}

const SelectWrapper: React.FC<ISelectWrapper> = ({
    children, 
    onApply,
    wrapperClassname
}) => {
  return (
      <div className={wrapperClassname}>
        {children}
        <Button
            apperance='default'
            className={styles.applyBtn}
            onClick={onApply}
          >
            Применить
          </Button>
      </div>
  )
}

export default SelectWrapper