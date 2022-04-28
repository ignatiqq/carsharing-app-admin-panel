export const validationPatterns = {
    emailPattern: {
        //eslint-disable-next-line
        value: "(.+)@(.+){2,}\.(.+){2,}",
        message: "Введите корректный Email адрес"
    },
    passwordPattern: {
        //eslint-disable-next-line
        value: "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$",
        message: "Пароль должен быть минимум из 6 символов, содержать заглавную букву и символ!"
    }

}