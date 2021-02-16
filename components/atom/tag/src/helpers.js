/**
 * returns key:value in obj except for those keys defined in props
 * @param {Object} obj
 * @param {Array.<string>} props
 * @return {Object}
 */
export const filterKeys = (obj, listOfProps) =>
  Object.keys(obj).reduce((acc, key) => {
    if (listOfProps.indexOf(key) === -1) {
      acc[key] = obj[key]
    }
    return acc
  }, {})
