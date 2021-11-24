import PropTypes from 'prop-types'
import {forwardRef} from 'react'

const Button = ({
  children,
  href,
  target,
  disabled,
  isSubmit, // eslint-disable-line react/prop-types
  isButton, // eslint-disable-line react/prop-types
  link,
  linkFactory: Link,
  routeState,
  forwardingRef, // eslint-disable-line react/prop-types
  ...attrs
}) => {
  if (isSubmit) attrs.type = 'submit'
  if (isButton) attrs.type = 'button'

  const defaultRel = target === '_blank' ? 'noopener' : undefined
  const rel = attrs.rel || defaultRel

  return link ? (
    <Link
      {...attrs}
      href={href}
      target={target}
      rel={rel}
      ref={forwardingRef}
      state={routeState}
    >
      {children}
    </Link>
  ) : (
    <button {...attrs} disabled={disabled} ref={forwardingRef}>
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
  linkFactory: PropTypes.func,
  /**
   * Object to pass state between react routes
   */
  routeState: PropTypes.object
}

Button.defaultProps = {
  // eslint-disable-next-line react/prop-types
  linkFactory: forwardRef(({children, ...props}, ref) => (
    <a {...props} ref={ref}>
      {children}
    </a>
  ))
}

export default Button
