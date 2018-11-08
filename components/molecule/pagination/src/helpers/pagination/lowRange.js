import processPage from './processPage'

/**
 * Gets the lowest number of the range assigned for the page number according to the number of pages to display
 * @param {object} params - parameters pagination
 * @param {number} params.page - Original page number
 * @param {number} params.processedPage - Processed page number (inside the range)
 * @param {number} params.totalPages - Total number of pages
 * @param {number} params.showPages - Number of pages to display in the range of pages displayed
 * @return {number} lowest number of the assigned range for the page
 */
const lowRange = ({page: _page, processedPage, totalPages, showPages}) => {
  const page = processedPage || processPage({page: _page, totalPages})
  if (page % showPages)
    return page + (showPages - (page % showPages)) - showPages
  return page - showPages
}

export default lowRange
