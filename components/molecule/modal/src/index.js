import {forwardRef, useState} from 'react'
import PropTypes from 'prop-types'

import {MODAL_SIZES} from './config.js'
import MoleculeModal from './MoleculeModal.js'
import MoleculeModalWithoutAnimation from './MoleculeModalWithoutAnimation.js'
import MoleculeModalWithURLState from './MoleculeModalWithURLState.js'

import MoleculeModalContent from './Content/index.js'
import MoleculeModalFooter from './Footer/index.js'

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

MoleculeModalWithAnimation.displayName = 'MoleculeModal'

MoleculeModalWithAnimation.Content = MoleculeModalContent
MoleculeModalWithAnimation.Footer = MoleculeModalFooter

export {
  MODAL_SIZES as MoleculeModalSizes,
  MODAL_SIZES,
  MoleculeModal,
  MoleculeModalContent,
  MoleculeModalFooter,
  MoleculeModalWithURLState,
  MoleculeModalWithURLState as MoleculeModalWithUrlState,
  MoleculeModalWithAnimation,
  MoleculeModalWithoutAnimation
}

export default MoleculeModalWithAnimation
