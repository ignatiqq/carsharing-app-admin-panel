import { authorizationValidationPatterns, essenseChangeValidations } from "./patterns"

export const authValidations = {
    email: {
      required: {
        value: true,
        message: "Это обязательное поле!"
      },
      pattern: {
        ...authorizationValidationPatterns.emailPattern
      }
    },
    password: {
      required: {
        value: true,
        message: "Это обязательное поле!"
      },
      pattern: {
        ...authorizationValidationPatterns.passwordPattern,
      }
    }
}

export const essenceValidations = {
  name: {
    required: {
      value: true,
      message: "Это обязательное поле!"
    }
  },
  number: {
    required: {
      value: true,
      message: "Это обязательное поле!"
    },
    pattern: {
      ...essenseChangeValidations.number,
    }
  },
  price: {
    required: {
      value: true,
      message: "Это обязательное поле!"
    },
    pattern: {
      ...essenseChangeValidations.price
    }
  },
  description: {
    required: {
      value: true,
      message: "Это обязательное поле!"
    },
    pattern: {
      ...essenseChangeValidations.description
    }
  },
  tank: {
    required: {
      value: true,
      message: "Это обязательное поле!"
    },
    pattern: {
      ...essenseChangeValidations.tank
    }
  }
}