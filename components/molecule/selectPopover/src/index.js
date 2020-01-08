import React, {useState} from 'react'
import Button from '@s-ui/react-atom-button'
import cx from 'classnames'
import PropTypes from 'prop-types'

const BASE_CLASS = `sui-MoleculeSelectPopover`

export default function MoleculeSelectPopover({
  acceptButtonText,
  cancelButtonText,
  defaultText,
  iconArrowDown: IconArrowDown,
  onAccept = () => {}
}) {
  const [isOpen, setIsOpen] = useState(false)
  // const [isSelected, setIsSelected] = useState(false)

  const selectClassName = cx(`${BASE_CLASS}-select`, {
    [`is-open`]: isOpen
  })

  const handleOnAccept = () => {
    setIsOpen(false)
    onAccept()
  }

  return (
    <div className={BASE_CLASS}>
      <div className={selectClassName} onClick={() => setIsOpen(!isOpen)}>
        <span className={`${BASE_CLASS}-selectText`}>{defaultText}</span>
        <div className={`${BASE_CLASS}-selectIcon`}>
          <IconArrowDown />
        </div>
      </div>
      {isOpen && (
        <div className={`${BASE_CLASS}-popover`}>
          <div className={`${BASE_CLASS}-popoverContent`}>foo</div>
          <div className={`${BASE_CLASS}-popoverActionBar`}>
            <Button onClick={() => setIsOpen(false)} design="flat">
              {cancelButtonText}
            </Button>
            <Button onClick={handleOnAccept}>{acceptButtonText}</Button>
          </div>
        </div>
      )}
    </div>
  )
}

MoleculeSelectPopover.displayName = 'MoleculeSelectPopover'
MoleculeSelectPopover.propTypes = {
  acceptButtonText: PropTypes.string.isRequired,
  cancelButtonText: PropTypes.string.isRequired,
  defaultText: PropTypes.string.isRequired,
  iconArrowDown: PropTypes.node.isRequired,
  onAccept: PropTypes.func
}
