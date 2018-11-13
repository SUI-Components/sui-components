/**
 * Gets the previous page number taking into account possible compressed mode
 * @param {object} params - parameters pagination
 * @param {number} params.page - Original page number
 * @return {number} previous page number
 */
const prevPage = ({page}) => (page !== 1 ? page - 1 : null)

export default prevPage
