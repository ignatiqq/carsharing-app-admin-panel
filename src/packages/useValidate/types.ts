interface IValidation {
    required: {
        value: boolean,
        message: string
    },
    pattern: IValidationPattern
}

export interface IValidationPattern {
    value: string | ((value: string) => boolean),
    message: string
}

export type IValidations<T> = Record<keyof T, Partial<IValidation>>

export type IErrors<T> = Partial<Record<keyof T, string>>

export interface IUseValidateProps<T> {
    formFields: T,
    validations: IValidations<T>,
    onSubmit: (data: T) => void
}

export type IPatternFunc = (data: string) => boolean;
