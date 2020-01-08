import React, {useState} from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

const BASE_CLASS = `sui-MoleculeSelectPopover`

export default function MoleculeSelectPopover({
  defaultText,
  iconArrowDown: IconArrowDown
}) {
  const [isOpen, setIsOpen] = useState(false)
  // const [isSelected, setIsSelected] = useState(false)

  const selectClassName = cx(`${BASE_CLASS}-select`, {
    [`is-open`]: isOpen
  })

  return (
    <div className={BASE_CLASS}>
      <div className={selectClassName} onClick={() => setIsOpen(!isOpen)}>
        <span className={`${BASE_CLASS}-selectText`}>{defaultText}</span>
        <div className={`${BASE_CLASS}-selectIcon`}>
          <IconArrowDown />
        </div>
      </div>
      {isOpen && <div className={`${BASE_CLASS}-popover`}>foo</div>}
    </div>
  )
}

MoleculeSelectPopover.displayName = 'MoleculeSelectPopover'
MoleculeSelectPopover.propTypes = {
  defaultText: PropTypes.string.isRequired,
  iconArrowDown: PropTypes.node.isRequired
}
