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