import processPage from './processPage'

/**
 * Gets the highest number of the range assigned for the page number according to the number of pages to display
 * @param {object} params - parameters pagination
 * @param {number} params.page - Original page number
 * @param {number} params.processedPage - Processed page number (inside the range)
 * @param {number} params.totalPages - Total number of pages
 * @param {number} params.showPages - Number of pages to display in the range of pages displayed
 * @return {number} highest number of the assigned range for the page
 */
const highRange = ({page: _page, processedPage, totalPages, showPages}) => {
  const page = processedPage || processPage({page: _page, totalPages})
  const high = page + (showPages - (page % showPages))
  if (page % showPages) return high < totalPages ? high : totalPages
  return page
}

export default highRange
