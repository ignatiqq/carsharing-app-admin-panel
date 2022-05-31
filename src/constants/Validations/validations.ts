import { authorizationValidationPatterns, essenseChangeValidations } from "./patterns";

const isRequiredField = "Это обязательное поле!";

export const authValidations = {
    email: {
      required: {
        value: true,
        message: isRequiredField
      },
      pattern: {
        ...authorizationValidationPatterns.emailPattern
      }
    },
    password: {
      required: {
        value: true,
        message: isRequiredField
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
      message: isRequiredField
    }
  },
  number: {
    required: {
      value: true,
      message: isRequiredField
    },
    pattern: {
      ...essenseChangeValidations.number,
    }
  },
  price: {
    required: {
      value: true,
      message: isRequiredField
    },
    pattern: {
      ...essenseChangeValidations.price
    }
  },
  description: {
    required: {
      value: true,
      message: isRequiredField
    },
    pattern: {
      ...essenseChangeValidations.description
    }
  },
  tank: {
    required: {
      value: true,
      message: isRequiredField
    },
    pattern: {
      ...essenseChangeValidations.tank
    }
  }
}