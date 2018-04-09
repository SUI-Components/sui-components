import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-MoleculeAutosuggest-List-AtomItem'

export const AtomListItem = function (props) {
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
      {option.getStringTruncated()}
    </div>
  )
}

AtomListItem.displayName = 'AtomListItem'

AtomListItem.propTypes = {
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
