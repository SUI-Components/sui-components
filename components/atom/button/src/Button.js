import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  children,
  href,
  target,
  disabled,
  isSubmit, // eslint-disable-line react/prop-types
  isButton, // eslint-disable-line react/prop-types
  link,
  linkFactory: Link,
  ...attrs
}) => {
  if (isSubmit) attrs.type = 'submit'
  if (isButton) attrs.type = 'button'
  return link ? (
    <Link
      {...attrs}
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener' : undefined}
    >
      {children}
    </Link>
  ) : (
    <button {...attrs} disabled={disabled}>
      {children}
    </button>
  )
}

Button.propTypes = {
  /**
   * Content to be included in the button
   */
  children: PropTypes.node,
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

Button.defaultProps = {
  linkFactory: ({children, ...rest} = {}) => <a {...rest}>{children}</a>
}

export default Button
