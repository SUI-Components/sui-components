export const debouncingTimePropType = function (
  props,
  propName,
  componentName
) {
  const prop = props[propName]
  if (typeof prop !== 'number' || prop < 1) {
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
