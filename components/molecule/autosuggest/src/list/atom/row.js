import PropTypes from 'prop-types'
import { AtomListItem } from './item'
import { AtomListFeaturedItem } from './item-featured'
import { AtomListItemHighlighted } from './item-highlited'

export const AtomListRows = function (props) {
  const {options, onClickCallback, onFocusCallback, onRemoveFeatureItem, iconRemoveItemFeatured, iconItemFeatured} = props
  let rows = []
  for (let i = 0; i < options.length; i++) {
    if (options[i].isFeatured()) {
      let props =
        {
          option: options[i],
          onClickCallback: onClickCallback,
          onFocusCallback: onFocusCallback,
          onRemoveFeatureItem: onRemoveFeatureItem,
        }

      if (iconRemoveItemFeatured) {
        props.iconRemove = iconRemoveItemFeatured
      }

      if (iconItemFeatured) {
        props.iconFeatured = iconItemFeatured
      }
      rows.push(AtomListFeaturedItem(props))
    } else {
      const props = {option: options[i], onClickCallback: onClickCallback, onFocusCallback: onFocusCallback}
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
  onFocusCallback: PropTypes.any,
  /**
   * Callback on remove featured item
   */
  onRemoveFeatureItem: PropTypes.any,
  /**
   * Icon on a function returning rxjs. Action to remove featured item
   */
  iconRemoveItemFeatured: PropTypes.any,
  /**
   * Icon on a function returning rxjs. This icon is to mark a featured item
   */
  iconItemFeatured: PropTypes.any,
}
