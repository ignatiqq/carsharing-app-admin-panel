export const validationPatterns = {
    emailPattern: {
        //eslint-disable-next-line
        value: "(.+)@(.+){2,}\.(.+){2,}",
        message: "Введите корректный Email адрес"
    },
    passwordPattern: {
        //eslint-disable-next-line
        value: "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$",
        message: "Пароль должен состоять минимум из 6 символов!"
    }

}