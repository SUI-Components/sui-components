import PropTypes from 'prop-types'
import React from 'react'
import PaginationItem from './sui-pagination-item'

const FIRST_PAGE = 1
const PAGINATION_STEP = 1

function PaginationBasic({
  createUrl,
  currentPage,
  factoryLink,
  handlePaginate,
  patternUrl,
  totalPages,
  ...props
}) {
  const renderPaginationItem = itemProps => (
    <PaginationItem
      {...itemProps}
      createUrl={createUrl}
      factoryLink={factoryLink}
      handlePaginate={handlePaginate}
      key={itemProps.pageNumber}
      patternUrl={patternUrl}
    />
  )

  const getPrevButton = () =>
    renderPaginationItem({
      pageNumber: currentPage - PAGINATION_STEP,
      pageText: props.prevText,
      isControl: true
    })

  const getNextButton = () =>
    renderPaginationItem({
      pageNumber: currentPage + PAGINATION_STEP,
      pageText: props.nextText,
      isControl: true
    })

  const getFirstLastSeparator = key => (
    <li
      className="sui-PaginationBasic-item sui-PaginationBasic-item--separator"
      key={key}
    >
      {props.firstLastSeparatorText}
    </li>
  )

  const getPaginationItems = () => {
    const leftWindow = currentPage - props.window
    const rightWindow = currentPage + props.window

    const min = leftWindow < FIRST_PAGE ? FIRST_PAGE : leftWindow
    const max = rightWindow > totalPages ? totalPages : rightWindow

    let paginationItems = []

    if (props.showFirstLast && min > FIRST_PAGE) {
      paginationItems.push(
        renderPaginationItem({
          pageNumber: FIRST_PAGE,
          pageText: FIRST_PAGE
        })
      )
      paginationItems.push(getFirstLastSeparator('firstSeparator'))
    }

    for (let i = min; i <= max; i++) {
      const paginationItem = renderPaginationItem({
        pageNumber: i,
        pageText: i,
        isCurrent: i === currentPage
      })

      paginationItems.push(paginationItem)
    }

    if (props.showFirstLast && max < totalPages) {
      paginationItems.push(getFirstLastSeparator('lastSeparator'))
      paginationItems.push(
        renderPaginationItem({
          pageNumber: totalPages,
          pageText: totalPages
        })
      )
    }

    return paginationItems
  }

  const showPrevButton = currentPage > FIRST_PAGE
  const showNextButton = currentPage < totalPages

  return (
    <div className="sui-PaginationBasic">
      <ul className="sui-PaginationBasic-list">
        {showPrevButton && getPrevButton()}
        {getPaginationItems()}
        {showNextButton && getNextButton()}
      </ul>
    </div>
  )
}

PaginationBasic.propTypes = {
  createUrl: PropTypes.func,
  currentPage: PropTypes.number.isRequired,
  factoryLink: PropTypes.func,
  firstLastSeparatorText: PropTypes.string,
  handlePaginate: PropTypes.func,
  nextText: PropTypes.string,
  patternUrl: PropTypes.string,
  prevText: PropTypes.string,
  showFirstLast: PropTypes.bool,
  totalPages: PropTypes.number.isRequired,
  window: PropTypes.number.isRequired
}

PaginationBasic.defaultProps = {
  firstLastSeparatorText: '...',
  handlePaginate: () => {},
  nextText: 'Next',
  prevText: 'Prev'
}

PaginationBasic.displayName = 'PaginationBasic'

export default PaginationBasic
