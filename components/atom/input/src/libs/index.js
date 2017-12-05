/**
 * @param {Object} obj Object to iterate through
 * @param {Array.<string>} keysToBeFiltered those keys that should stay
 */
export const filterObjectKeys = function (obj, keysToBeFiltered) {
  return Object.keys(obj)
    .filter((key) => keysToBeFiltered.includes(key))
    .reduce((acc, key) => {
      acc[key] = obj[key]
      return acc
    }, {})
}
