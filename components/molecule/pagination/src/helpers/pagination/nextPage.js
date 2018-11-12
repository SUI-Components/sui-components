/**
 * Gets the next page number taking into account possible compressed mode
 * @param {object} params - parameters pagination
 * @param {number} params.page - Original page number
 * @param {number} params.totalPages - Total number of pages
 * @return {number} next page number
 */
const nextPage = ({page, totalPages}) => (page !== totalPages ? page + 1 : null)

export default nextPage
