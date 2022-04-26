export const validationPatterns = {
    emailPattern: {
        value: "/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$",
        message: "Введите корректный Email адрес"
    },
    passwordPattern: {
        value: "/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/",
        message: "Пароль должен состоять минимум из 6 символов и содержать 1 заглавную букву!"
    }

}