import React from 'react'
import PropTypes from 'prop-types'

import AtomButton from '@s-ui/react-atom-button'

import * as pagination from './helpers/pagination'
import {
  isValidPage,
  isValidTotalPages,
  isValidShowPages
} from './customPropTypes'

const BASE_CLASS = 'sui-MoleculePagination'
const CLASS_PREV_BUTTON_ICON = 'sui-MoleculePagination-prevButtonIcon'
const CLASS_NEXT_BUTTON_ICON = 'sui-MoleculePagination-nextButtonIcon'

const PageButton = ({onSelectPage, page, design, ...props}) => {
  const _onSelectPage = e => {
    onSelectPage(e, {page})
  }
  return (
    <li className={`${BASE_CLASS}-item`}>
      <AtomButton onClick={_onSelectPage} design={design} {...props} />
    </li>
  )
}

PageButton.propTypes = {
  /** Callback that will be called with (event, page) on each page button click */
  onSelectPage: PropTypes.func,
  /** Current page selected */
  page: isValidPage,
  /** Design to be used for the page button. Design types 'solid', 'outline' or 'flat' */
  design: PropTypes.string
}

const MoleculePagination = ({
  onSelectNext,
  onSelectPrev,
  page,
  totalPages,
  showPages,
  prevButtonText,
  prevButtonIcon: PrevButtonIcon,
  nextButtonText,
  nextButtonIcon: NextButtonIcon,
  onSelectPage,
  compressed,
  hideDisabled,
  selectedPageButtonDesign,
  nonSelectedPageButtonDesign,
  prevButtonDesign,
  nextButtonDesign
}) => {
  const paramsPagination = {
    page,
    totalPages,
    showPages
  }

  const handleClickNext = e => {
    const page = pagination.nextPage(paramsPagination)
    onSelectNext(e, {page})
  }

  const handleClickPrev = e => {
    const page = pagination.prevPage(paramsPagination)
    onSelectPrev(e, {page})
  }

  const range = pagination.range(paramsPagination)
  const nextPage = pagination.nextPage(paramsPagination)
  const prevPage = pagination.prevPage(paramsPagination)

  const isHidePrev = hideDisabled && !prevPage
  const isHideNext = hideDisabled && !nextPage

  return (
    <ul className={BASE_CLASS}>
      {!isHidePrev && (
        <li className={`${BASE_CLASS}-item`}>
          <AtomButton
            onClick={handleClickPrev}
            design={prevButtonDesign}
            disabled={!prevPage}
          >
            {PrevButtonIcon && (
              <span className={CLASS_PREV_BUTTON_ICON}>
                <PrevButtonIcon />
              </span>
            )}
            {prevButtonText}
          </AtomButton>
        </li>
      )}
      {compressed ? (
        <PageButton
          page={page}
          design={selectedPageButtonDesign}
          onSelectPage={onSelectPage}
        >
          {page}
        </PageButton>
      ) : (
        range.map(pageRange => (
          <PageButton
            key={pageRange}
            page={pageRange}
            design={
              pageRange === page
                ? selectedPageButtonDesign
                : nonSelectedPageButtonDesign
            }
            onSelectPage={onSelectPage}
          >
            {pageRange}
          </PageButton>
        ))
      )}
      {!isHideNext && (
        <li className={`${BASE_CLASS}-item`}>
          <AtomButton
            onClick={handleClickNext}
            design={nextButtonDesign}
            disabled={!nextPage}
          >
            {nextButtonText}
            {NextButtonIcon && (
              <span className={CLASS_NEXT_BUTTON_ICON}>
                <NextButtonIcon />
              </span>
            )}
          </AtomButton>
        </li>
      )}
    </ul>
  )
}

MoleculePagination.displayName = 'MoleculePagination'

MoleculePagination.propTypes = {
  /** Total number of pages */
  totalPages: isValidTotalPages,

  /** Current page selected */
  page: isValidPage,

  /** Number of pages to be displayed in the range (10 by default) */
  showPages: isValidShowPages,

  /** If the pagination should be displayed in compressed mode or not */
  compressed: PropTypes.bool,

  /** Text to be displayed on the previous button */
  prevButtonText: PropTypes.string,

  /** Icon to be displayed on the previous button */
  prevButtonIcon: PropTypes.any,

  /** Text to be displayed on the next button */
  nextButtonText: PropTypes.string,

  /** Icon to be displayed on the next button */
  nextButtonIcon: PropTypes.any,

  /** Callback that will be called with (event, page) on prev button click */
  onSelectPrev: PropTypes.func,

  /** Callback that will be called with (event, page) on next button click */
  onSelectNext: PropTypes.func,

  /** Callback that will be called with (event, page) on each page button click */
  onSelectPage: PropTypes.func,

  /** Hide Previous/Next buttons if they're disabled */
  hideDisabled: PropTypes.bool,

  /** Design to be used for the selected page. Design types 'solid', 'outline' or 'flat' */
  selectedPageButtonDesign: PropTypes.string,

  /** Design to be used for the selected page. Design types 'solid', 'outline' or 'flat' */
  nonSelectedPageButtonDesign: PropTypes.string,

  /** Design to be used for the previous button if its visible. Design types 'solid', 'outline' or 'flat' */
  prevButtonDesign: PropTypes.string,

  /** Design to be used for the next button if its visible. Design types 'solid', 'outline' or 'flat */
  nextButtonDesign: PropTypes.string
}

MoleculePagination.defaultProps = {
  showPages: 10,
  compressed: false,
  prevButtonText: 'Previous',
  nextButtonText: 'Next',
  onSelectPrev: () => {},
  onSelectNext: () => {},
  onSelectPage: () => {},
  selectedPageButtonDesign: 'solid',
  nonSelectedPageButtonDesign: 'flat',
  prevButtonDesign: 'flat',
  nextButtonDesign: 'flat'
}

export default MoleculePagination
