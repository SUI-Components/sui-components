import cx from 'classnames'
import PropTypes from 'prop-types'

import ActionableTag from './Actionable/index.js'
import {
  ACTIONABLE_ONLY_PROPS,
  DESIGNS,
  LINK_TYPES,
  SIZES,
  STANDARD_ONLY_PROPS
} from './constants.js'
import {filterKeys} from './helpers.js'
import StandardTag from './Standard.js'

const AtomTag = props => {
  const {
    design,
    href,
    icon,
    onClick,
    responsive,
    size,
    type,
    disabled,
    isFitted = false
  } = props
  const isActionable = onClick || href
  const classNames = cx(
    'sui-AtomTag',
    `sui-AtomTag-${size}`,
    design && `sui-AtomTag--${design}`,
    icon && 'sui-AtomTag-hasIcon',
    responsive && 'sui-AtomTag--responsive',
    type && `sui-AtomTag--${type}`,
    disabled && 'sui-AtomTag--disabled',
    isFitted && 'sui-AtomTag--isFitted'
  )

  /**
   * Removes all actionable tag props from the react props
   * @return {Object}
   */
  const getStandardProps = () => filterKeys(props, ACTIONABLE_ONLY_PROPS)

  /**
   * Removes all standard tag props from the react props
   * @return {Object}
   */
  const getActionableProps = () => filterKeys(props, STANDARD_ONLY_PROPS)

  return isActionable ? (
    <ActionableTag
      {...getActionableProps()}
      disabled={disabled}
      className={classNames}
    />
  ) : (
    <StandardTag
      {...getStandardProps()}
      disabled={disabled}
      className={classNames}
    />
  )
}

AtomTag.displayName = 'AtomTag'

AtomTag.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  icon: PropTypes.node,
  onClose: PropTypes.func,
  /**
   * Will only be shown if the onClose fn is defined
   */
  closeIcon: PropTypes.node,
  /**
   * If defined, onClose will be ignored
   */
  onClick: PropTypes.func,
  /**
   * generates type of link
   */
  linkFactory: PropTypes.func,
  /**
   * Actionable tags can be used as an anchor. Same as <a> href
   */
  href: PropTypes.string,
  /**
   * To be used if href is defined
   */
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  /**
   * To be used if href is defined
   */
  rel: PropTypes.arrayOf(PropTypes.oneOf(Object.values(LINK_TYPES))),
  /**
   * Actionable tags can have iconPlacement='right'
   */
  iconPlacement: PropTypes.oneOf(['right', 'left']),
  /**
   * Tag size
   */
  size: PropTypes.oneOf(Object.values(SIZES)),
  /**
   * Tag title
   */
  title: PropTypes.string,
  /**
   * Tag type in order to color it as desired
   * from a high order component.
   */
  type: PropTypes.string,
  /**
   * true for make responsive layout. keep large size in mobile
   */
  responsive: PropTypes.bool,
  /**
   * Design style of button: 'solid' (default), 'outline', 'flat', 'link'
   */
  design: PropTypes.oneOf(Object.values(DESIGNS)),
  /**
   * Value of the tag to be returned on actionable tags
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** element becomes border-margin-padding-less */
  isFitted: PropTypes.bool
}

AtomTag.defaultProps = {
  iconPlacement: 'left',
  size: SIZES.MEDIUM
}

export default AtomTag
export {DESIGNS as atomTagDesigns}
export {LINK_TYPES as linkTypes}
export {LINK_TYPES as atomTagLinkTypes}
export {SIZES as atomTagSizes}
