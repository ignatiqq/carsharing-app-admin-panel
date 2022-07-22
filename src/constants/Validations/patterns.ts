export const authorizationValidationPatterns = {
    emailPattern: {
        value: "^.{6,}$",
        message: "Введите корректный Email адрес"
    },
    passwordPattern: {
        value: (value: string) => value.length >= 6,
        message: "Пароль должен быть минимум из 6 символов"
    },

}

export const essenseChangeValidations = {
    number: {
        value: "^.{9,9}$",
        message: "Номер должен состоять из 9 символов"
    },
    price: {
        value: (value: number) => !value.toString().startsWith("0") && value > 0,
        message: "Цена машины не может быть меньше или равна нулю"
    },
    description: {
        value: (value: string) => value.length > 10,
        message: "Описание должно быть не короче 10 символов"
    },
    tank: {
        value: (value: number) => value >= 0 && value <= 100,
        message: "Бак может быть заполнен от 0 до 100%"
    }
}