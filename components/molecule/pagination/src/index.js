import React, {Component} from 'react'
import PropTypes from 'prop-types'

import MoleculeButtonGroup from '@s-ui/react-molecule-button-group'
import AtomButtom from '@schibstedspain/sui-atom-button'

import * as pagination from './helpers/pagination'
import {
  isValidPage,
  isValidTotalPages,
  isValidShowPages
} from './customPropTypes'

const BASE_CLASS = 'sui-MoleculePagination'
const CLASS_PREV_BUTTON_ICON = 'sui-MoleculePagination-prevButtonIcon'
const CLASS_NEXT_BUTTON_ICON = 'sui-MoleculePagination-nextButtonIcon'

// eslint-disable-next-line react/prop-types
const PageButton = ({onSelectPage, page, ...props}) => {
  const _onSelectPage = e => {
    onSelectPage(e, page)
  }
  return <AtomButtom onClick={_onSelectPage} {...props} />
}

class MoleculePagination extends Component {
  handleClickNext = e => {
    const {onSelectNext, ...props} = this.props
    const nextPage = pagination.nextPage(props)
    onSelectNext(e, nextPage)
  }

  handleClickPrev = e => {
    const {onSelectPrev, ...props} = this.props
    const prevPage = pagination.prevPage(props)
    onSelectPrev(e, prevPage)
  }

  render() {
    const {
      page,
      totalPages,
      showPages,
      prevButtonText,
      prevButtonIcon: PrevButtonIcon,
      nextButtonText,
      nextButtonIcon: NextButtonIcon,
      onSelectPage,
      compressed
    } = this.props

    const paramsPagination = {
      page,
      totalPages,
      showPages,
      compressed
    }

    const range = pagination.range(paramsPagination)
    const nextPage = pagination.nextPage(paramsPagination)
    const prevPage = pagination.prevPage(paramsPagination)

    return (
      <div className={BASE_CLASS}>
        <MoleculeButtonGroup>
          {
            <AtomButtom onClick={this.handleClickPrev} disabled={!prevPage}>
              {PrevButtonIcon && (
                <span className={CLASS_PREV_BUTTON_ICON}>
                  <PrevButtonIcon />
                </span>
              )}
              {prevButtonText}
            </AtomButtom>
          }
          {compressed ? (
            <PageButton page={page} focused onSelectPage={onSelectPage}>
              {page}
            </PageButton>
          ) : (
            range.map(pageRange => (
              <PageButton
                key={pageRange}
                page={pageRange}
                focused={pageRange === page}
                onSelectPage={onSelectPage}
              >
                {pageRange}
              </PageButton>
            ))
          )}
          {
            <AtomButtom onClick={this.handleClickNext} disabled={!nextPage}>
              {nextButtonText}
              {NextButtonIcon && (
                <span className={CLASS_NEXT_BUTTON_ICON}>
                  <NextButtonIcon />
                </span>
              )}
            </AtomButtom>
          }
        </MoleculeButtonGroup>
      </div>
    )
  }
}

MoleculePagination.displayName = 'MoleculePagination'

MoleculePagination.propTypes = {
  /* Total pages */
  totalPages: isValidTotalPages,

  /* Current page selected */
  page: isValidPage,

  /* Number of pages to be displayed in the range (10 by default) */
  showPages: isValidShowPages,

  /* If the pagination should be displayed in compressed mode or not */
  compressed: PropTypes.bool,

  /* Text to be displayed on the previous button */
  prevButtonText: PropTypes.string,

  /* Icon to be displayed on the previous button */
  prevButtonIcon: PropTypes.any,

  /* Text to be displayed on the next button */
  nextButtonText: PropTypes.string,

  /* Icon to be displayed on the next button */
  nextButtonIcon: PropTypes.any,

  /* Callback that will be called with (event, page) on prev button click */
  onSelectPrev: PropTypes.func,

  /* Callback that will be called with (event, page) on next button click */
  onSelectNext: PropTypes.func,

  /* Callback that will be called with (event, page) on each page button click */
  onSelectPage: PropTypes.func
}

MoleculePagination.defaultProps = {
  showPages: 10,
  compressed: false,
  prevButtonText: 'Previous',
  nextButtonText: 'Next',
  onSelectPrev: () => {},
  onSelectNext: () => {},
  onSelectPage: () => {}
}

export default MoleculePagination
