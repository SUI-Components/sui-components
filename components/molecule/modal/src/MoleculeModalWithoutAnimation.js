import {forwardRef} from 'react'
import {MoleculeModal} from './index'

const MoleculeModalWithoutAnimation = forwardRef(({...rest}, ref) => {
  return <MoleculeModal ref={ref} withAnimation={false} {...rest} />
})

MoleculeModalWithoutAnimation.displayName = `(${MoleculeModal.displayName})WithoutAnimation`
MoleculeModalWithoutAnimation.contextTypes = MoleculeModal.contextTypes
MoleculeModalWithoutAnimation.propTypes = {
  onClose: PropTypes.func,
  onAnimationEnd: PropTypes.func
}

export default MoleculeModalWithoutAnimation
