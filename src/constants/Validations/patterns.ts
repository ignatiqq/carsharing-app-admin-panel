export const validationPatterns = {
    emailPattern: {
        //eslint-disable-next-line
        value: "^.{6,}$",
        message: "Введите корректный Email адрес"
    },
    passwordPattern: {
        //eslint-disable-next-line
        value: "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,}$",
        message: "Пароль должен быть минимум из 6 символов, содержать заглавную букву и символ!"
    }

}