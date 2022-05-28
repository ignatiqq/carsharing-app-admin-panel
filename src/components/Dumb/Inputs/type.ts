import { ChangeEvent, FocusEvent } from "react"

export interface IInput {
    name: string,
    value?: string | number,
    disabled?: boolean,
    placeholder?: string,
    onChange?: (data: ChangeEvent<HTMLInputElement>) => void,
    onBlur?: (data: FocusEvent<HTMLInputElement>) => void,
    onFocus?: (data: FocusEvent<HTMLInputElement>) => void,
    className?: string,
    tabindex?: number,
    
}