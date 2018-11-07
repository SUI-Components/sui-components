/* eslint-disable react/prop-types, no-unused-vars, no-console */

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

    console.log(range, nextPage, prevPage)
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
            <PageButton page={page} focused onClickPage={onClickPage}>
              {page}
            </PageButton>
          ) : (
            range.map(pageRange => (
              <PageButton
                key={pageRange}
                page={pageRange}
                focused={pageRange === page}
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
  totalPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
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
