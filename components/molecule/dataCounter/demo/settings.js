export const stylesSection = {
  border: '1px solid #CCC',
  background: '#fff',
  margin: '40px 0',
  padding: '30px 10px'
}

export const consoleValue = (e, {value}) => {
  console.log({value}) // eslint-disable-line
}

export const minValueHelpText = 'Minimum Value'
export const minValueErrorText =
  'The value cannot be lower than the Minimum Value'
export const maxValueHelpText = 'Maximum Value'
export const maxValueErrorText =
  'The value cannot be higher than the Maximum Value'

export const propsMessages = {
  minValueHelpText,
  minValueErrorText,
  maxValueHelpText,
  maxValueErrorText
}
