import {forwardRef, useState} from 'react'
import PropTypes from 'prop-types'

export default BaseComponent => {
  const displayName = BaseComponent.displayName

  const WithAnimation = forwardRef(
    ({onClose = () => {}, onAnimationEnd = () => {}, ...rest}, ref) => {
      const [isClosing, setIsClosing] = useState(false)

      const handleAnimationEnd = ev => {
        onAnimationEnd()

        if (!isClosing) return

        setIsClosing(false)
        onClose()
      }

      const handleClose = () => {
        setIsClosing(true)
      }

      return (
        <BaseComponent
          ref={ref}
          isClosing={isClosing}
          onAnimationEnd={handleAnimationEnd}
          onClose={handleClose}
          {...rest}
        />
      )
    }
  )

  WithAnimation.displayName = `withAnimation(${displayName})`
  WithAnimation.contextTypes = BaseComponent.contextTypes
  WithAnimation.propTypes = {
    onClose: PropTypes.func,
    onAnimationEnd: PropTypes.func
  }

  return WithAnimation
}
