import {forwardRef} from 'react'
import PropTypes from 'prop-types'

export default BaseComponent => {
  const displayName = BaseComponent.displayName

  const WithoutAnimation = forwardRef(({...rest}, ref) => {
    return <BaseComponent ref={ref} withAnimation={false} {...rest} />
  })

  WithoutAnimation.displayName = `WithoutAnimation(${displayName})`
  WithoutAnimation.contextTypes = BaseComponent.contextTypes
  WithoutAnimation.propTypes = {
    onClose: PropTypes.func,
    onAnimationEnd: PropTypes.func
  }

  return WithoutAnimation
}
