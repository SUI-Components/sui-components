import PropTypes from 'prop-types'

import ActionButtonLink from './ActionButtonLink.js'

const ActionButtonWrapper = ({
  children,
  href,
  target,
  disabled,
  isSubmit,
  isButton,
  link,
  linkFactory: Link = ActionButtonLink,
  ...attrs
}) => {
  if (isSubmit) attrs.type = 'submit'
  if (isButton) attrs.type = 'button'
  return link ? (
    <Link {...attrs} href={href} target={target} rel={target === '_blank' ? 'noopener' : undefined}>
      {children}
    </Link>
  ) : (
    <button {...attrs} disabled={disabled}>
      {children}
    </button>
  )
}

ActionButtonWrapper.propTypes = {
  /**
   * Content to be included in the button
   */
  children: PropTypes.node,
  /**
   * Disable: faded with no interaction.
   */
  disabled: PropTypes.bool,
  /**
   * URL to be added on the HTML link
   */
  href: PropTypes.string,
  /**
   * HTML element: if true, render a link. Otherwise render a button
   */
  link: PropTypes.bool,
  /**
   * Factory used to create navigation links
   */
  linkFactory: PropTypes.func,
  /**
   * if true, type="submit" (needed when several buttons coexist under the same form)
   */
  isSubmit: PropTypes.bool,
  /**
   * if true, type="button" (needed when several buttons coexist under the same form)
   */
  isButton: PropTypes.bool,
  /**
   * Target to be added on the HTML link
   */
  target: PropTypes.string
}

export default ActionButtonWrapper
