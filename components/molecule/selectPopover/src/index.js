import React from 'react'
import PropTypes from 'prop-types'

const BASE_CLASS = `sui-MoleculeSelectPopover`

export default function MoleculeSelectPopover({
  defaultText,
  iconArrowDown: IconArrowDown
}) {
  // const [isOpen, setIsOpen] = useState(false)
  // const [isSelected, setIsSelected] = useState(false)
  return (
    <div className={BASE_CLASS}>
      <div className={`${BASE_CLASS}-select`}>
        <span className={`${BASE_CLASS}-selectText`}>{defaultText}</span>
        <div className={`${BASE_CLASS}-icon`}>
          <IconArrowDown />
        </div>
      </div>
    </div>
  )
}

MoleculeSelectPopover.displayName = 'MoleculeSelectPopover'
MoleculeSelectPopover.propTypes = {
  defaultText: PropTypes.string.isRequired,
  iconArrowDown: PropTypes.node.isRequired
}
