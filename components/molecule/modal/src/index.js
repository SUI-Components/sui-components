import {forwardRef} from 'react'

import PropTypes from 'prop-types'

import MoleculeModalContent from './Content/index.js'
import MoleculeModalFooter from './Footer/index.js'
import {MODAL_SIZES} from './config.js'
import MoleculeModal from './MoleculeModal.js'
import MoleculeModalWithoutAnimation from './MoleculeModalWithoutAnimation.js'
import MoleculeModalWithURLState from './MoleculeModalWithURLState.js'

const MoleculeModalWithAnimation = forwardRef(({onClose, onAnimationEnd, ...rest}, ref) => {
  return <MoleculeModal ref={ref} onAnimationEnd={onAnimationEnd} onClose={onClose} {...rest} />
})

MoleculeModalWithAnimation.displayName = 'MoleculeModalWithAnimation'
MoleculeModalWithAnimation.propTypes = {
  onClose: PropTypes.func,
  onAnimationEnd: PropTypes.func
}

MoleculeModalWithAnimation.displayName = 'MoleculeModal'

MoleculeModalWithAnimation.Content = MoleculeModalContent
MoleculeModalWithAnimation.Footer = MoleculeModalFooter

MoleculeModal.Content = MoleculeModalContent
MoleculeModal.Footer = MoleculeModalFooter

export {
  MODAL_SIZES as MoleculeModalSizes,
  MODAL_SIZES as moleculeModalSizes,
  MODAL_SIZES,
  MoleculeModal,
  MoleculeModalContent,
  MoleculeModalFooter,
  MoleculeModalWithURLState,
  MoleculeModalWithURLState as MoleculeModalWithUrlState,
  MoleculeModalWithAnimation,
  MoleculeModalWithoutAnimation
}

export default MoleculeModal
