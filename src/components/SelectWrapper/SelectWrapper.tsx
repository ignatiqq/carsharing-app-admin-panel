import React from 'react';
import classNames from 'classnames';

import { Button } from "components";
import styles from "./SelectWrapper.module.scss";

interface ISelectWrapper {
    children: React.ReactElement,
    onApply?: (data?: any) => void,
    onReset: () => void,
    wrapperClassname?: string
}

const SelectWrapper: React.FC<ISelectWrapper> = ({
    children, 
    onApply,
    onReset,
    wrapperClassname
}) => {
  return (
      <div className={classNames(styles.wrapper, wrapperClassname)}>
        {children}
        <div className={styles.buttonsWrapper}>
          <Button 
            apperance='dangerous'
            onClick={onReset}
          >
            Сбросить
          </Button>
          <Button
              apperance='default'
              onClick={onApply}
            >
              Применить
          </Button>
        </div>
      </div>
  )
}

export default SelectWrapper