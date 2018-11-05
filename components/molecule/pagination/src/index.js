/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React, {Component} from 'react'
import PropTypes from 'prop-types'

import MoleculeButtonGroup from '@s-ui/react-molecule-button-group'
import AtomButtom from '@schibstedspain/sui-atom-button'

const BASE_CLASS = 'sui-MoleculePagination'
const CLASS_PREV_BUTTON_ICON = 'sui-MoleculePagination-prevButtonIcon'
const CLASS_NEXT_BUTTON_ICON = 'sui-MoleculePagination-nextButtonIcon'

// eslint-disable-next-line react/prop-types
const PageButton = ({onClickPage, page, ...props}) => {
  const _onClickPage = e => onClickPage && onClickPage(page)
  return <AtomButtom onClick={_onClickPage} {...props} />
}

class MoleculePagination extends Component {
  highRange(current, totalPages, pageBreak = 10) {
    const high = current + (pageBreak - (current % pageBreak))
    if (current % pageBreak) return high < totalPages ? high : totalPages
    return current
  }

  lowRange(current, pageBreak = 10) {
    if (current % pageBreak)
      return current + (pageBreak - (current % pageBreak)) - pageBreak
    return current - pageBreak
  }

  isTherePrev(current, pageBreak = 10) {
    const {compressed} = this.props
    if (compressed) return current > 1
    return current - pageBreak > 0
  }

  isThereNext(current, totalPages, pageBreak = 10) {
    const {compressed} = this.props
    if (compressed) return current < totalPages
    const highRange = this.highRange(current, totalPages, pageBreak)
    return highRange < totalPages
  }

  range(currentPage, showPages, totalPages) {
    const lowRange = this.lowRange(currentPage, showPages)
    const highRange = this.highRange(currentPage, totalPages, showPages)
    const rangeNumItems =
      highRange === totalPages ? totalPages - lowRange : showPages
    console.log({lowRange, highRange, rangeNumItems})
    return [...Array.from(new Array(rangeNumItems), (_, i) => lowRange + i + 1)]
  }

  handleClickNext = () => {
    const {
      onClickNext,
      currentPage,
      showPages,
      totalPages,
      compressed
    } = this.props
    const processedCurrentPage = this.processPage(currentPage)
    if (compressed) {
      const nextPage =
        processedCurrentPage !== totalPages
          ? processedCurrentPage + 1
          : totalPages
      onClickNext && onClickNext(nextPage)
    } else {
      const nextPage =
        [...this.range(processedCurrentPage, showPages, totalPages)].pop() + 1
      onClickNext && onClickNext(nextPage)
    }
  }

  handleClickPrev = () => {
    const {
      onClickPrev,
      currentPage,
      showPages,
      totalPages,
      compressed
    } = this.props
    const processedCurrentPage = this.processPage(currentPage)
    if (compressed) {
      const prevPage = processedCurrentPage !== 1 ? processedCurrentPage - 1 : 1
      onClickPrev && onClickPrev(prevPage)
    } else {
      const prevPage =
        [...this.range(processedCurrentPage, showPages, totalPages)].shift() - 1
      onClickPrev && onClickPrev(prevPage)
    }
  }

  processPage = page => {
    const {totalPages} = this.props
    if (page < 1) return 1
    if (page > totalPages) return totalPages
    return page
  }

  render() {
    const {
      totalPages,
      currentPage,
      showPages,
      prevButtonText,
      prevButtonIcon: PrevButtonIcon,
      nextButtonText,
      nextButtonIcon: NextButtonIcon,
      onClickPage,
      compressed
    } = this.props
    const processedCurrentPage = this.processPage(currentPage)
    const range = this.range(processedCurrentPage, showPages, totalPages)
    const isTherePrev = this.isTherePrev(processedCurrentPage, showPages)
    const isThereNext = this.isThereNext(
      processedCurrentPage,
      totalPages,
      showPages
    )
    console.log({processedCurrentPage, showPages, totalPages, range})
    return (
      <div className={BASE_CLASS}>
        <MoleculeButtonGroup>
          {isTherePrev && (
            <AtomButtom onClick={this.handleClickPrev}>
              {PrevButtonIcon && (
                <span className={CLASS_PREV_BUTTON_ICON}>
                  <PrevButtonIcon />
                </span>
              )}{' '}
              {prevButtonText}
            </AtomButtom>
          )}
          {compressed ? (
            <PageButton
              page={processedCurrentPage}
              focused
              onClickPage={onClickPage}
            >
              {processedCurrentPage}
            </PageButton>
          ) : (
            range.map(page => (
              <PageButton
                key={page}
                page={page}
                focused={page === processedCurrentPage}
                onClickPage={onClickPage}
              >
                {page}
              </PageButton>
            ))
          )}
          {isThereNext && (
            <AtomButtom onClick={this.handleClickNext}>
              {nextButtonText}{' '}
              {NextButtonIcon && (
                <span className={CLASS_NEXT_BUTTON_ICON}>
                  <NextButtonIcon />
                </span>
              )}
            </AtomButtom>
          )}
        </MoleculeButtonGroup>
      </div>
    )
  }
}

MoleculePagination.displayName = 'MoleculePagination'

// Remove these comments if you need
// MoleculePagination.contextTypes = {i18n: PropTypes.object}
MoleculePagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  showPages: PropTypes.number,
  compressed: PropTypes.bool,
  prevButtonText: PropTypes.string,
  prevButtonIcon: PropTypes.any,
  nextButtonText: PropTypes.string,
  nextButtonIcon: PropTypes.any,
  onClickPrev: PropTypes.func,
  onClickNext: PropTypes.func,
  onClickPage: PropTypes.func
}

MoleculePagination.defaultProps = {
  showPages: 10,
  compressed: false,
  prevButtonText: 'Previous',
  nextButtonText: 'Next',
  onClickPrev: () => {},
  onClickNext: () => {},
  onClickPage: () => {}
}

export default MoleculePagination
