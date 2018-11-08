import React, {Component} from 'react'
import PropTypes from 'prop-types'

import MoleculeButtonGroup from '@s-ui/react-molecule-button-group'
import AtomButtom from '@schibstedspain/sui-atom-button'

import * as pagination from './helpers/pagination'

const BASE_CLASS = 'sui-MoleculePagination'
const CLASS_PREV_BUTTON_ICON = 'sui-MoleculePagination-prevButtonIcon'
const CLASS_NEXT_BUTTON_ICON = 'sui-MoleculePagination-nextButtonIcon'

// eslint-disable-next-line react/prop-types
const PageButton = ({onClickPage, page, ...props}) => {
  const _onClickPage = e => onClickPage && onClickPage(page)
  return <AtomButtom onClick={_onClickPage} {...props} />
}

class MoleculePagination extends Component {
  handleClickNext = () => {
    const {onClickNext, ...props} = this.props
    const nextPage = pagination.nextPage(props)
    onClickNext(nextPage)
  }

  handleClickPrev = () => {
    const {onClickPrev, ...props} = this.props
    const prevPage = pagination.prevPage(props)
    onClickPrev(prevPage)
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
      onClickPage,
      compressed
    } = this.props

    const processedPage = pagination.processPage({page, totalPages})
    const paramsPagination = {
      page,
      processedPage,
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
          {prevPage && (
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
            <PageButton page={processedPage} focused onClickPage={onClickPage}>
              {processedPage}
            </PageButton>
          ) : (
            range.map(pageRange => (
              <PageButton
                key={pageRange}
                page={pageRange}
                focused={pageRange === processedPage}
                onClickPage={onClickPage}
              >
                {pageRange}
              </PageButton>
            ))
          )}
          {nextPage && (
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

MoleculePagination.propTypes = {
  /* Total pages */
  totalPages: PropTypes.number.isRequired,

  /* Current page selected */
  page: PropTypes.number.isRequired,

  /* Number of pages to be displayed in the range (10 by default) */
  showPages: PropTypes.number,

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

  /* Callback to be executed on previous button click (it will receive the proper page number) */
  onClickPrev: PropTypes.func,

  /* Callback to be executed on next button click (it will receive the proper page number) */
  onClickNext: PropTypes.func,

  /* Callback to be executed on each pagebutton click (it will receive the proper page number) */
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
