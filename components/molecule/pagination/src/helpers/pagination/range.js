import lowRange from './lowRange'
import highRange from './highRange'

/**
 * Gets the proper range for the page number according to the number of pages to display
 * @param {object} params - parameters pagination
 * @param {number} params.page - Original page number
 * @param {number} params.totalPages - Total number of pages
 * @param {number} params.showPages - Number of pages to display in the range of pages displayed
 * @return {number[]} range of page numbers
 */
const range = ({page, totalPages, showPages}) => {
  const _lowRange = lowRange({page, showPages})
  const _highRange = highRange({page, totalPages, showPages})
  const rangeNumItems =
    _highRange === totalPages ? totalPages - _lowRange : showPages
  return [...Array.from(new Array(rangeNumItems), (_, i) => _lowRange + i + 1)]
}

export default range
