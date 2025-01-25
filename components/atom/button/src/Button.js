import PropTypes from 'prop-types'

import ButtonLink from './ButtonLink.js'

const Button = ({
  children,
  href,
  target,
  disabled,
  isSubmit, // eslint-disable-line react/prop-types
  isButton, // eslint-disable-line react/prop-types
  link,
  linkFactory: Link = ButtonLink,
  forwardingRef, // eslint-disable-line react/prop-types
  className,
  ...attrs
}) => {
  if (isSubmit) attrs.type = 'submit'
  if (isButton) attrs.type = 'button'

  const defaultRel = target === '_blank' ? 'noopener' : undefined
  const rel = attrs.rel || defaultRel

  const [Component, props] = link ? [Link, {href, target, rel}] : ['button', {disabled}]

  return (
    <Component className={className} ref={forwardingRef} {...props} {...attrs}>
      {children}
    </Component>
  )
}

Button.propTypes = {
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
