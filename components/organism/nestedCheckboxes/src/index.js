import React, {useState} from 'react'
import PropTypes from 'prop-types'

import MoleculeCheckboxField from '@s-ui/react-molecule-checkbox-field'

const baseClass = 'sui-OrganismNestedCheckboxes'

const noop = () => {}

const OrganismNestedCheckboxes = ({
  id,
  labelParent = '',
  onChangeParent = noop,
  items = [],
  join = false,
  onChangeItem = noop,
  fullCheckedStyledIcon: FullCheckedStyledIcon,
  halfCheckedStyledIcon: HalfCheckedStyledIcon,
  defaultItemsVisibility = true,
  showItemsIcon: ShowItemsIcon,
  hideItemsIcon: HideItemsIcon
}) => {
  const [showItems, setShowItems] = useState(defaultItemsVisibility) //eslint-disable-line
  const showToggleIcons = ShowItemsIcon !== null

  const parentIsFullChecked = items.every(({checked}) => checked === true)
  const parentIsHalfChecked =
    !parentIsFullChecked && items.some(({checked}) => checked === true)

  const parentIsFullOrHalfChecked = parentIsFullChecked || parentIsHalfChecked

  const parentStyledIcon = parentIsHalfChecked
    ? HalfCheckedStyledIcon
    : FullCheckedStyledIcon

  return (
    <ul className={baseClass}>
      <li>
        <MoleculeCheckboxField
          controlledChecked={parentIsFullChecked}
          id={id}
          label={labelParent}
          onChange={() => onChangeParent(parentIsFullOrHalfChecked)}
          shouldRenderIcon={parentIsFullOrHalfChecked}
          styledIcon={parentStyledIcon}
          auxIcon={showItems ? HideItemsIcon : ShowItemsIcon}
          auxIconOnChange={() => setShowItems(!showItems)}
        />
        {items.length > 0 && showToggleIcons && showItems && (
          <ul className={`${baseClass}-list`}>
            {items.map(item => {
              const {id: childId, checked} = item

              return (
                <li
                  key={childId}
                  className={`${baseClass}-listItem ${join ? 'is-joined' : ''}`}
                >
                  <MoleculeCheckboxField
                    controlledChecked={checked}
                    id={childId}
                    onChange={e => onChangeItem(e.target)}
                    shouldRenderIcon={checked}
                    styledIcon={FullCheckedStyledIcon}
                    {...item}
                  />
                </li>
              )
            })}
          </ul>
        )}
      </li>
    </ul>
  )
}

OrganismNestedCheckboxes.displayName = 'OrganismNestedCheckboxes'

OrganismNestedCheckboxes.propTypes = {
  /* Used for the label and element identifier */
  id: PropTypes.string.isRequired,

  /* Text to be displayed as label on parent checkbox */
  labelParent: PropTypes.string,

  /* onChange callback for parent */
  onChangeParent: PropTypes.func,

  /* Shape for items */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      checked: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ),

  /* Remove default padding on items */
  join: PropTypes.bool,

  /* Show items icon */
  showItemsIcon: PropTypes.elementType,

  /* Hide items icon */
  hideItemsIcon: PropTypes.elementType,

  /* onChange callback for items */
  onChangeItem: PropTypes.func,

  /* Default visibility for items */
  defaultItemsVisibility: PropTypes.bool,

  /* Icon to show on items and on parent when all items are checked */
  fullCheckedStyledIcon: PropTypes.elementType,

  /* Icon to show on parent when some items are checked */
  halfCheckedStyledIcon: PropTypes.elementType
}

export default OrganismNestedCheckboxes
