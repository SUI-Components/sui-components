import MoleculeModal from './MoleculeModal'
import MoleculeModalWithAnimation from './MoleculeModalWithAnimation'
import MoleculeModalWithURLState from './MoleculeModalWithURLState'
import MoleculeModalWithoutAnimation from './MoleculeModalWithoutAnimation'
import {MODAL_SIZES} from './config'

import MoleculeModalContent from './Content'
import MoleculeModalFooter from './Footer'

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
