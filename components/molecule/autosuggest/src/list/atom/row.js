// import React from 'react'
import PropTypes from 'prop-types'
import { AtomListItem } from './item'
import { AtomListFeaturedItem } from './item-featured'
import { AtomListItemHighlighted } from './item-highlited'

export const AtomListRows = function (props) {
  const {options, onClickCallback, onFocusCallback} = props
  let rows = []
  for (let i = 0; i < options.length; i++) {
    const props = {option: options[i], onClickCallback: onClickCallback, onFocusCallback: onFocusCallback}
    if (options[i].isFeatured()) {
      rows.push(AtomListFeaturedItem(props))
    } else {
      if (options[i].isHighlited()) {
        rows.push(AtomListItemHighlighted(props))
      } else {
        rows.push(AtomListItem(props))
      }
    }
  }

  return (rows)
}

AtomListRows.displayName = 'AtomListRows'

AtomListRows.propTypes = {
  /**
   * Options list
   */
  options: PropTypes.any,
  /**
   * Callback on click item
   */
  onClickCallback: PropTypes.any,
  /**
   * Callback on focus item
   */
  onFocusCallback: PropTypes.any
}
