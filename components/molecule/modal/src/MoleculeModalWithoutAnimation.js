import {forwardRef} from 'react'

import PropTypes from 'prop-types'

import {MoleculeModal} from './index.js'

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
