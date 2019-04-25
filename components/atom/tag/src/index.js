import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import ActionableTag from './Actionable'
import StandardTag from './Standard'

const ACTIONABLE_ONLY_PROPS = [
  'href',
  'iconPlacement',
  'target',
  'actionable',
  'linkFactory'
]
const STANDARD_ONLY_PROPS = ['closeIcon', 'onClose']
const SIZES = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small'
}

/**
 * returns key:value in obj except for those keys defined in props
 * @param {Object} obj
 * @param {Array.<string>} props
 * @return {Object}
 */
const filterKeys = (obj, listOfProps) =>
  Object.keys(obj).reduce((acc, key) => {
    if (listOfProps.indexOf(key) === -1) {
      acc[key] = obj[key]
    }
    return acc
  }, {})

const AtomTag = props => {
  const {href, icon, onClick, size, responsive} = props

  const isActionable = onClick || href
  const classNames = cx(
    'sui-AtomTag',
    `sui-AtomTag-${size}`,
    responsive && 'sui-AtomTag--responsive',
    icon && 'sui-AtomTag-hasIcon'
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
    <ActionableTag {...getActionableProps()} className={classNames} />
  ) : (
    <StandardTag {...getStandardProps()} className={classNames} />
  )
}

AtomTag.displayName = 'AtomTag'

AtomTag.defaultProps = {
  iconPlacement: 'left'
}

AtomTag.propTypes = {
  /**
   * Custom classes
   */
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
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
   * Actionable tags can have iconPlacement='right'
   */
  iconPlacement: PropTypes.oneOf(['right', 'left']),
  /**
   * Tag size
   */
  size: PropTypes.oneOf(Object.values(SIZES)),
  /**
   * true for make responsive layout. keep large size in mobile
   */
  responsive: PropTypes.bool
}

AtomTag.defaultProps = {
  size: SIZES.MEDIUM
}

export default AtomTag
export {SIZES as atomTagSizes}
