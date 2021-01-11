/**
 * Gets the lowest number of the range assigned for the page number according to the number of pages to display
 * @param {object} params - parameters pagination
 * @param {number} params.page - Original page number
 * @param {number} params.totalPages - Total number of pages
 * @param {number} params.showPages - Number of pages to display in the range of pages displayed
 * @return {number} lowest number of the assigned range for the page
 */

const lowRange = ({page, showEdges, showPages, totalPages}) => {
  const lowRangeFixer = Math.floor(showPages / 2)
  let lowRange
  if (page % showPages) lowRange = page - (page % showPages)
  else lowRange = page - showPages

  if (showEdges) {
    if (page <= showPages) return 1

    if (lowRange + showPages === page) {
      lowRange = page - lowRangeFixer
    }
    if (lowRange === page - 1) {
      lowRange = lowRange - lowRangeFixer
    }
  }

  return Math.min(lowRange, totalPages - showPages)
}

export default lowRange
