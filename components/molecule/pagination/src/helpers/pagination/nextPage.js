import range from './range'
import highRange from './highRange'

/**
 * Gets the next page number taking into account possible compressed mode
 * @param {object} params - parameters pagination
 * @param {number} params.page - Original page number
 * @param {number} params.processedPage - Processed page number (inside the range)
 * @param {boolean} params.compressed - Compressed mode or not
 * @param {number} params.totalPages - Total number of pages
 * @param {number} params.showPages - Number of pages to display in the range of pages displayed
 * @return {number} next page number
 */
const nextPage = ({page, compressed, totalPages, showPages}) => {
  const _range = range({page, showPages, totalPages})
  const _highRange = highRange({page, showPages, totalPages})
  if (compressed) return page !== totalPages ? page + 1 : null
  else return _highRange < totalPages ? [..._range].pop() + 1 : null
}

export default nextPage
