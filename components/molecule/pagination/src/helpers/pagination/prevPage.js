import processPage from './processPage'
import range from './range'

/**
 * Gets the previous page number taking into account possible compressed mode
 * @param {object} params - parameters pagination
 * @param {number} params.page - Original page number
 * @param {number} params.processedPage - Processed page number (inside the range)
 * @param {boolean} params.compressed - Compressed mode or not
 * @param {number} params.totalPages - Total number of pages
 * @param {number} params.showPages - Number of pages to display in the range of pages displayed
 * @return {number} previous page number
 */
const prevPage = ({
  page: _page,
  processedPage,
  compressed,
  totalPages,
  showPages
}) => {
  const page = processedPage || processPage({page: _page, totalPages})
  const _range = range({page, showPages, totalPages})
  if (compressed) return page !== 1 ? page - 1 : null
  else return page - showPages > 0 ? [..._range].shift() - 1 : null
}

export default prevPage
