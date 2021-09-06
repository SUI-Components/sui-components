import {forwardRef, useState} from 'react'
import PropTypes from 'prop-types'
import MoleculeModal from './MoleculeModal'

const MoleculeModalWithAnimation = forwardRef(
  ({onClose, onAnimationEnd, ...rest}, ref) => {
    const [isClosing, setIsClosing] = useState(false)

    const handleAnimationEnd = event => {
      typeof onAnimationEnd === 'function' && onAnimationEnd()

      if (!isClosing) return

      setIsClosing(false)
      typeof onClose === 'function' && onClose(event)
    }

    const handleClose = () => {
      setIsClosing(true)
    }

    return (
      <MoleculeModal
        ref={ref}
        isClosing={isClosing}
        onAnimationEnd={handleAnimationEnd}
        onClose={handleClose}
        {...rest}
      />
    )
  }
)

MoleculeModalWithAnimation.displayName = `(${MoleculeModal.displayName})WithAnimation`
MoleculeModalWithAnimation.contextTypes = MoleculeModal.contextTypes
MoleculeModalWithAnimation.propTypes = {
  onClose: PropTypes.func,
  onAnimationEnd: PropTypes.func
}

export default MoleculeModalWithAnimation
