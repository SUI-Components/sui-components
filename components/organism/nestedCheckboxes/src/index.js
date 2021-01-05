import {useState} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import MoleculeCheckboxField from '@s-ui/react-molecule-checkbox-field'

const baseClass = 'sui-OrganismNestedCheckboxes'

const checkItemIsChecked = ({props}) => {
  const {checked} = props
  return checked === true
}

const OrganismNestedCheckboxes = ({
  children,
  id,
  checkedIcon: CheckedIcon,
  intermediateIcon: IntermediateIcon,
  hideItemsIcon: HideItemsIcon,
  join = false,
  labelParent = '',
  onChangeParent = () => {},
  onClickParent = () => {},
  showItems: showItemsProp = true,
  showItemsIcon: ShowItemsIcon
}) => {
  const [showItems, setShowItems] = useState(showItemsProp)
  const showToggleIcons = ShowItemsIcon !== null

  const isParentChecked = children?.every(checkItemIsChecked)
  const isParentIntermediate =
    !isParentChecked && children?.some(checkItemIsChecked)

  return (
    <ul className={baseClass}>
      <li onClick={onClickParent}>
        <MoleculeCheckboxField
          id={id}
          checked={isParentChecked}
          checkedIcon={CheckedIcon}
          intermediate={isParentIntermediate}
          intermediateIcon={IntermediateIcon}
          label={labelParent}
          onChange={onChangeParent}
          toggleIcon={showItems ? HideItemsIcon : ShowItemsIcon}
          toggleIconOnChange={() => setShowItems(!showItems)}
        />
        {children?.length > 0 && showToggleIcons && showItems && (
          <ul className={`${baseClass}-list`}>
            {children?.map(child => {
              const {props} = child
              const {id: childId} = props

              const listItemClass = `${baseClass}-listItem`
              const listItemClassModifier = cx(listItemClass, {
                [`${listItemClass}--joined`]: join
              })

              return (
                <li key={childId} className={listItemClassModifier}>
                  {child}
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
  /** children */
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  /* Used for the label and element identifier */
  id: PropTypes.string,

  /* Icon to show on items and on parent when all items are checked */
  checkedIcon: PropTypes.elementType,

  /* Icon to show on parent when some items are checked */
  intermediateIcon: PropTypes.elementType,

  /* Hide items icon */
  hideItemsIcon: PropTypes.elementType,

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
  onClickParent: PropTypes.func
}

export default OrganismNestedCheckboxes
