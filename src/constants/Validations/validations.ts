import { validationPatterns } from "./patterns"

export const validations = {
    email: {
      required: {
        value: true,
        message: "Это обязательное поле!"
      },
      pattern: {
        value: validationPatterns.emailPattern.value,
        message: validationPatterns.emailPattern.message
      }
    },
    password: {
      required: {
        value: true,
        message: "Это обязательное поле!"
      },
      pattern: {
        value: validationPatterns.passwordPattern.value,
        message: validationPatterns.passwordPattern.message
      }
    }
}