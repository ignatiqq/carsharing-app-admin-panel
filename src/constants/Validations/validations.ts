import { authorizationValidationPatterns } from "./patterns"

export const authValidations = {
    email: {
      required: {
        value: true,
        message: "Это обязательное поле!"
      },
      pattern: {
        value: authorizationValidationPatterns.emailPattern.value,
        message: authorizationValidationPatterns.emailPattern.message
      }
    },
    password: {
      required: {
        value: true,
        message: "Это обязательное поле!"
      },
      pattern: {
        value: authorizationValidationPatterns.passwordPattern.value,
        message: authorizationValidationPatterns.passwordPattern.message
      }
    }
}

export const essenceValidations = {
  name: {
    required: {
      value: true,
      message: "Это обязательное поле!"
    }
  }
}