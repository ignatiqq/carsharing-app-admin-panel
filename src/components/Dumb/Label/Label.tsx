import React from 'react'

interface ILabel {
    children: React.ReactNode,
    className?: string
}

const Label: React.FC<ILabel> = ({children, className}) => {
  return (
    <label className={`${className ? className : ""}`}>
        {children}
    </label>
  )
}

export default Label