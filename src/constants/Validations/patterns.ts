export const validationPatterns = {
    emailPattern: {
        //eslint-disable-next-line
        value: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$",
        message: "Введите корректный Email адрес"
    },
    passwordPattern: {
        //eslint-disable-next-line
        value: "^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$",
        message: "Пароль должен состоять минимум из 6 символов и содержать 1 заглавную букву!"
    }

}