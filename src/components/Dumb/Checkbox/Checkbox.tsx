import React from 'react';
import classNames from 'classnames';

import styles from "./Checkbox.module.scss";

interface ICheckbox {
    label: string,
    value: string,
    id: string,
    name: string,
    color?: string,
    className?: string,
    selected: boolean,
    customCheckboxStyles?: string,
    onChange: (data: any) => void,
    customLabelStyles?: string
}

const Checkbox: React.FC<ICheckbox> = (
    {
        label,
        value,
        id,
        name,
        onChange,
        selected,
        className,
        customCheckboxStyles,
        customLabelStyles
    }
) => {

    return (
        <div className={classNames(styles.wrapper, className)}>
            <input onChange={(e) => onChange(e.target.value)} className={classNames(styles.checkbox, customCheckboxStyles)} checked={selected} type="checkbox" id={id} name={name} value={value} />
            <label className={classNames(styles.label, customLabelStyles, {
                [styles.labelActive]: selected
            })} htmlFor={id}>{label}</label>
        </div>
    )
}

export default Checkbox;