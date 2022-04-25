export const naturalNumber = function (props, propName, componentName) {
  if (
    typeof props[propName] !== 'number' ||
    props[propName] % 1 !== 0 ||
    props[propName] < 0
  ) {
    return new Error(
      'Invalid prop `' +
        propName +
        '` supplied to' +
        ' `' +
        componentName +
        '`. Validation failed.'
    )
  }
}
