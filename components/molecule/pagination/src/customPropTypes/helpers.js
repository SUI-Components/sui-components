const getMessageErrorNumber = ({propName, componentName}) => `${propName} in ${componentName} should be a number`

const getMessageErrorPositive = ({propName, componentName}) =>
  `${propName} in ${componentName} should be a positive number`

const getMessageErrorInRange = ({propName, componentName}) =>
  `${propName} in ${componentName} should be lower or equal than the total number of pages`

export {getMessageErrorNumber, getMessageErrorPositive, getMessageErrorInRange}
