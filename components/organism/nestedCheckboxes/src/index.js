import React, {useState} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import MoleculeCheckboxField from '@s-ui/react-molecule-checkbox-field'

const baseClass = 'sui-OrganismNestedCheckboxes'

const OrganismNestedCheckboxes = ({
  id,
  checkedIcon: CheckedIcon,
  intermediateIcon: IntermediateIcon,
  hideItemsIcon: HideItemsIcon,
  items = [],
  join = false,
  labelParent = '',
  onChangeItem = () => {},
  onChangeParent = () => {},
  showItems: showItemsProp = true,
  showItemsIcon: ShowItemsIcon
}) => {
  const [showItems, setShowItems] = useState(showItemsProp)
  const showToggleIcons = ShowItemsIcon !== null

  const isParentFullChecked = items.every(({checked}) => checked === true)
  const isParentHalfChecked =
    !isParentFullChecked && items.some(({checked}) => checked === true)

  const isParentFullOrHalfChecked = isParentFullChecked || isParentHalfChecked

  return (
    <ul className={baseClass}>
      <li>
        <MoleculeCheckboxField
          id={id}
          checked={isParentFullChecked}
          checkedIcon={CheckedIcon}
          intermediate={isParentHalfChecked}
          intermediateIcon={IntermediateIcon}
          label={labelParent}
          onChange={() => onChangeParent(isParentFullOrHalfChecked)}
          toggleIcon={showItems ? HideItemsIcon : ShowItemsIcon}
          toggleIconOnChange={() => setShowItems(!showItems)}
        />
        {items.length > 0 && showToggleIcons && showItems && (
          <ul className={`${baseClass}-list`}>
            {items.map(item => {
              const {id: childId, checked} = item

              const listItemClass = `${baseClass}-listItem`
              const listItemClassModifier = cx(listItemClass, {
                [`${listItemClass}--joined`]: join
              })

              return (
                <li key={childId} className={listItemClassModifier}>
                  <MoleculeCheckboxField
                    id={childId}
                    checked={checked}
                    checkedIcon={CheckedIcon}
                    intermediateIcon={IntermediateIcon}
                    onChange={e => onChangeItem(e.target)}
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

  /* Icon to show on items and on parent when all items are checked */
  checkedIcon: PropTypes.elementType,

  /* Icon to show on parent when some items are checked */
  intermediateIcon: PropTypes.elementType,

  /* Hide items icon */
  hideItemsIcon: PropTypes.elementType,

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

  /* Text to be displayed as label on parent checkbox */
  labelParent: PropTypes.string,

  /* onChange callback for parent */
  onChangeParent: PropTypes.func,

  /* Default visibility for items */
  showItems: PropTypes.bool,

  /* Show items icon */
  showItemsIcon: PropTypes.elementType,

  /* onChange callback for items */
  onChangeItem: PropTypes.func
}

export default OrganismNestedCheckboxes
