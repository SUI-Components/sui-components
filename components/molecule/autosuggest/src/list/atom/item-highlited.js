import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-MoleculeAutosuggest-List-AtomItem'

export const AtomListItemHighlighted = function (props) {
  const {option, onClickCallback, onFocusCallback} = props
  const cxNames = (option.isFocus())
    ? cx(BASE_CLASS + '-row', BASE_CLASS + '-row-focus')
    : cx(BASE_CLASS + '-row')

  return (
    <div
      className={cxNames}
      key={option.getPosition()}
      onClick={onClickCallback(option)}
      onMouseOver={onFocusCallback(option)}
    >
      {option.getFirstPartString()}
      <span className={BASE_CLASS + '-row-item--highlighted'}>{option.getHighlightedString()}</span>
      {option.getLastPartString()}
    </div>
  )
}

AtomListItemHighlighted.displayName = 'AtomListItemHighlighted'

AtomListItemHighlighted.propTypes = {
  /**
   * Options list
   */
  option: PropTypes.any,
  /**
   * Callback on click item
   */
  onClickCallback: PropTypes.any,
  /**
   * Callback on focus item
   */
  onFocusCallback: PropTypes.any
}