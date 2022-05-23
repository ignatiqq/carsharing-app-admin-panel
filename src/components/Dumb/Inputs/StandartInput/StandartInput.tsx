import React from 'react';
import classNames from "classnames";

import type { IInput } from '../type';
import styles from "./StandartInput.module.scss";

interface IStandartInput extends IInput {
    type?: string,
    id?: string
}

const StandartInput: React.FC<IStandartInput> = ({
    type = "text",
    name,
    value,
    disabled = false,
    placeholder,
    tabindex,
    onChange,
    onBlur,
    onFocus,
    className,
    id
}) => {
  return (
    <input 
        className={classNames(styles.input, className)}
        type={type} 
        name={name}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        tabIndex={tabindex}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        id={id}
    />
  )
}

export default StandartInput;