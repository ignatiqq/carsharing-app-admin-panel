import { authorizationValidationPatterns, essenseChangeValidations } from "./patterns";

const isRequiredField = "Это обязательное поле!";
const requiredTemplate = {
  value: true,
  message: isRequiredField
}

export const authValidations = {
    email: {
      required: {
        ...requiredTemplate
      },
      pattern: {
        ...authorizationValidationPatterns.emailPattern
      }
    },
    password: {
      required: {
        ...requiredTemplate
      },
      pattern: {
        ...authorizationValidationPatterns.passwordPattern,
      }
    }
}

export const essenceValidations = {
  name: {
    required: {
      ...requiredTemplate
    }
  },
  number: {
    required: {
      ...requiredTemplate
    },
    pattern: {
      ...essenseChangeValidations.number,
    }
  },
  price: {
    required: {
      ...requiredTemplate
    },
    pattern: {
      ...essenseChangeValidations.price
    }
  },
  description: {
    required: {
      ...requiredTemplate
    },
    pattern: {
      ...essenseChangeValidations.description
    }
  },
  tank: {
    required: {
      ...requiredTemplate
    },
    pattern: {
      ...essenseChangeValidations.tank
    }
  }
}