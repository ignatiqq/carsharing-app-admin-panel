interface IValidation {
    required: {
        value: boolean,
        message: string
    },
    pattern: {
        value: string,
        message: string
    }
}

type IValidations<T> = Record<keyof T, Partial<IValidation>>

export type IErrors<T> = Partial<Record<keyof T, string>>

export interface IUseValidateProps<T> {
    formFields: T,
    validations: IValidations<T>,
    onSubmit: (data: T) => void
}