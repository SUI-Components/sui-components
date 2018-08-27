import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'

const baseClass = 'sui-PaginationBasic'
const PAGE_NUMBER_HOLDER = '%{pageNumber}'

export default function PaginationItem({pageNumber, patternUrl, ...props}) {
  const getText = () => (
    <span className={`${baseClass}-text`}>{props.pageText}</span>
  )

  const onClick = e => props.handlePaginate(pageNumber, e)

  const itemBaseClass = `${baseClass}-item`
  const classNames = cx(itemBaseClass, {
    [`${itemBaseClass}--control`]: props.isControl,
    [`${itemBaseClass}--selected`]: props.isCurrent
  })

  return (
    <li className={classNames}>
      {props.isCurrent
        ? getText()
        : props.factoryLink({
            onClick,
            className: `${baseClass}-link`,
            destinationURL: props.createUrl({pageNumber, patternUrl}),
            pageText: props.pageText
          })}
    </li>
  )
}

PaginationItem.propTypes = {
  createUrl: PropTypes.func,
  factoryLink: PropTypes.func,
  handlePaginate: PropTypes.func,
  isControl: PropTypes.bool,
  isCurrent: PropTypes.bool,
  pageNumber: PropTypes.number.isRequired,
  pageText: PropTypes.any.isRequired,
  patternUrl: PropTypes.string
}

PaginationItem.defaultProps = {
  createUrl: ({pageNumber, patternUrl}) => {
    return patternUrl.replace(PAGE_NUMBER_HOLDER, pageNumber)
  },
  isCurrent: false,
  factoryLink: ({className, destinationURL, onClick, pageText}) => { // eslint-disable-line
    const linkProps = {className, onClick}
    return (
      <a {...linkProps} href={destinationURL}>
        {pageText}
      </a>
    )
  },
  patternUrl: '#'
}
