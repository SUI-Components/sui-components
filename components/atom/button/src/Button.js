import {forwardRef} from 'react'

import PropTypes from 'prop-types'

import {useElement} from './config.js'

const Button = forwardRef(({children, className, ...attrs}, forwardedRef) => {
  const [Element, props] = useElement({...attrs})

  return (
    <Element ref={forwardedRef} className={className} {...props} {...attrs}>
      {children}
    </Element>
  )
})

Button.propTypes = {
  /**
   * Render the passed value as the correspondent HTML tag or the component if a function is passed
   */
  as: PropTypes.elementType,
  /**
   * Content to be included in the button
   */
  children: PropTypes.node,
  /**
   * CSS class to be added to the button
   */
  className: PropTypes.string,
  /**
   * HTML element: if true, render a link. Otherwise render a button
   */
  link: PropTypes.bool,
  /**
   * URL to be added on the HTML link
   */
  href: PropTypes.string,
  /**
   * Target to be added on the HTML link
   */
  target: PropTypes.string,
  /**
   * Disable: faded with no interaction.
   */
  disabled: PropTypes.bool,
  /**
   * Factory used to create navigation links
   */
  linkFactory: PropTypes.func
}

export default Button
