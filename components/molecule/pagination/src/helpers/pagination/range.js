import highRange from './highRange.js'
import lowRange from './lowRange.js'

/**
 * Gets the proper range for the page number according to the number of pages to display
 * @param {object} params - parameters pagination
 * @param {number} params.page - Original page number
 * @param {number} params.totalPages - Total number of pages
 * @param {number} params.showPages - Number of pages to display in the range of pages displayed
 * @return {number[]} range of page numbers
 */
const range = ({page, totalPages: totalPagesParam, showEdges, showPages}) => {
  const totalPages = showEdges ? totalPagesParam - 1 : totalPagesParam
  const _lowRange = lowRange({page, showEdges, showPages, totalPages})
  const _highRangeFixer = showPages > totalPages ? totalPages - 1 : showPages
  const _highRange = showEdges ? _lowRange + _highRangeFixer : highRange({page, totalPages, showPages})

  const rangeNumItems = _highRange === totalPages ? totalPages - _lowRange : showPages
  return rangeNumItems > 0 ? [...Array.from(new Array(rangeNumItems), (_, i) => _lowRange + i + 1)] : []
}

export default range
