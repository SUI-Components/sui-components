import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  children,
  href,
  target,
  disabled,
  isSubmit,
  link,
  linkFactory: Link,
  ...attrs
}) =>
  link ? (
    <Link
      {...attrs}
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener' : undefined}
    >
      {children}
    </Link>
  ) : (
    <button
      {...attrs}
      type={isSubmit ? 'submit' : 'button'}
      disabled={disabled}
    >
      {children}
    </button>
  )

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
   * adds type="submit" to the button element
   */
  isSubmit: PropTypes.bool,
  /**
   * Factory used to create navigation links
   */
  linkFactory: PropTypes.func
}

Button.defaultProps = {
  linkFactory: ({children, ...rest} = {}) => <a {...rest}>{children}</a>
}

export default Button
