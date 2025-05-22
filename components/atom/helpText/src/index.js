import {forwardRef} from 'react'

import PropTypes from 'prop-types'

import Injector from '@s-ui/react-primitive-injector'

import {BASE_CLASS} from './settings.js'

const AtomHelpText = forwardRef(({text, ...props}, forwardedRef) => {
  const isTextString = typeof text === 'string'
  const Component = isTextString ? 'span' : Injector
  return (
    <Component className={BASE_CLASS} {...props} {...(isTextString && {ref: forwardedRef})}>
      {text}
    </Component>
  )
})

AtomHelpText.displayName = 'AtomHelpText'

AtomHelpText.propTypes = {
  text: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired
}

export default AtomHelpText
