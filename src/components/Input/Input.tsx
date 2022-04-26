import React, { ChangeEvent } from 'react'

interface IInput {
    type: string,
    name: string,
    value: string,
    autocomplete?: "on" | "off",
    disabled?: boolean,
    placeholder?: string,
    tabindex?: number,
    onChange: (data: ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<IInput> = ({
    type = "text",
    name,
    value,
    autocomplete = "on",
    disabled = false,
    placeholder,
    tabindex,
    onChange
}) => {
  return (
    <input 
        type={type} 
        name={name}
        value={value}
        autoComplete={autocomplete}
        disabled={disabled}
        placeholder={placeholder}
        tabIndex={tabindex}
        onChange={onChange}
    />
  )
}

export default Input;