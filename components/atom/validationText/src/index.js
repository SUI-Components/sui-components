import {forwardRef} from 'react'

import PropTypes from 'prop-types'

import Injector from '@s-ui/react-primitive-injector'

import {getClassNames, TYPES} from './settings.js'

const AtomValidationText = forwardRef(({text, type, ...props}, forwardedRef) => {
  const isTextString = typeof text === 'string'
  const Component = isTextString ? 'span' : Injector
  return (
    <Component className={getClassNames(type)} {...props} {...(isTextString && {ref: forwardedRef})}>
      {text}
    </Component>
  )
})

AtomValidationText.displayName = 'AtomValidationText'

AtomValidationText.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPES)).isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.bool]).isRequired
}

export default AtomValidationText
export {TYPES as AtomValidationTextTypes}
