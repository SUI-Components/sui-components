import {forwardRef, isValidElement} from 'react'
import cx from 'classnames'

import PropTypes from 'prop-types'

import Injector from '@s-ui/react-primitive-injector'

import {BASE_CLASS} from './settings.js'

const AtomHelpText = forwardRef(({as: As = 'span', className, text, ...props}, forwardedRef) => {
  const isTextString = typeof text === 'string'
  const isReferenceable = isValidElement(text) || typeof text === 'string'
  const Component = isTextString ? As : Injector
  return (
    <Component
      className={cx(BASE_CLASS, className)}
      {...props}
      {...{
        ...(isReferenceable && {ref: forwardedRef}),
        ...(!isTextString && {as: As})
      }}
    >
      {text}
    </Component>
  )
})

AtomHelpText.displayName = 'AtomHelpText'

AtomHelpText.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired
}

export default AtomHelpText
