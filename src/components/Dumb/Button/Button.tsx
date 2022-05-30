import React from 'react';
import classNames from 'classnames';

import styles from "./Button.module.scss";

interface IButton {
    className?: string,
    children?: React.ReactNode,
    apperance?: 'default' | 'dangerous' | 'common' | 'transparent',
    disabled?: boolean,
    type?: "button" | "submit" | "reset",
    onClick?: (data: any) => void
}

const Button: React.FC<IButton> = ({
    className,
    children,
    apperance = 'transparent',
    disabled = false,
    type = "button",
    onClick
}) => {

  return (
    <button
        disabled={disabled} 
        type={type}
        className={classNames(styles.button, className, {
            [styles.buttonDisabled]: disabled,
            [styles.buttonDefault]: !disabled && (apperance === "default"),
            [styles.buttonDangerous]: !disabled && apperance === "dangerous",
            [styles.buttonCommon]: !disabled && apperance === "common"
        })}
        onClick={onClick}
    >
        {children}
    </button>
  )
}

export default Button