/**
 * Process page number to return always page numbers inside the range (1...totalPages)
 * @param {object} params - parameters pagination
 * @param {number} params.page - Original page number
 * @param {number} params.totalPages - Total number of pages
 * @return {number} processed page inside the range
 */
const processPage = ({page, totalPages}) => {
  if (page < 1) return 1
  if (page > totalPages) return totalPages
  return page
}

export default processPage
