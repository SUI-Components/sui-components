import PropTypes from 'prop-types'
import React from 'react'
import PaginationItem from './sui-pagination-item'

const FIRST_PAGE = 1
const PAGINATION_STEP = 1

function PaginationBasic (props) {
  const renderPaginationItem = (itemProps) => (
    <PaginationItem
      {...itemProps}
      createUrl={props.createUrl}
      factoryLink={props.factoryLink}
      handlePaginate={props.handlePaginate}
      key={itemProps.pageNumber}
      patternUrl={props.patternUrl} />
  )

  const getPrevButton = () => renderPaginationItem({
    pageNumber: props.currentPage - PAGINATION_STEP,
    pageText: props.prevText,
    isControl: true
  })

  const getNextButton = () => renderPaginationItem({
    pageNumber: props.currentPage + PAGINATION_STEP,
    pageText: props.nextText,
    isControl: true
  })

  const getFirstLastSeparator = (key) => (
    <li className='sui-PaginationBasic-item sui-PaginationBasic-item--separator' key={key}>
      {props.firstLastSeparatorText}
    </li>
  )

  const getPaginationItems = () => {
    const leftWindow = props.currentPage - props.window
    const rightWindow = props.currentPage + props.window

    const min = leftWindow < FIRST_PAGE ? FIRST_PAGE : leftWindow
    const max = rightWindow > props.totalPages
      ? props.totalPages
      : rightWindow

    let paginationItems = []

    if (props.showFirstLast && min > FIRST_PAGE) {
      paginationItems.push(renderPaginationItem({
        pageNumber: FIRST_PAGE,
        pageText: FIRST_PAGE
      }))
      paginationItems.push(getFirstLastSeparator('firstSeparator'))
    }

    for (let i = min; i <= max; i++) {
      const paginationItem = renderPaginationItem({
        pageNumber: i,
        pageText: i,
        isCurrent: i === props.currentPage
      })

      paginationItems.push(paginationItem)
    }

    if (props.showFirstLast && max < props.totalPages) {
      paginationItems.push(getFirstLastSeparator('lastSeparator'))
      paginationItems.push(renderPaginationItem({
        pageNumber: props.totalPages,
        pageText: props.totalPages
      }))
    }

    return paginationItems
  }

  const showPrevButton = props.currentPage > FIRST_PAGE
  const showNextButton = props.currentPage < props.totalPages

  return (
    <div className='sui-PaginationBasic'>
      <ul className='sui-PaginationBasic-list'>
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
