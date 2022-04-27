import React, { ChangeEvent, FocusEvent } from 'react';
import classNames from "classnames";

import styles from "./Input.module.scss";

interface IInput {
    type?: string,
    name: string,
    value: string,
    disabled?: boolean,
    placeholder?: string,
    tabindex?: number,
    onChange: (data: ChangeEvent<HTMLInputElement>) => void,
    onBlur: (data: FocusEvent<HTMLInputElement>) => void,
    className?: string
}

const Input: React.FC<IInput> = ({
    type = "text",
    name,
    value,
    disabled = false,
    placeholder,
    tabindex,
    onChange,
    onBlur,
    className
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
    />
  )
}

export default Input;