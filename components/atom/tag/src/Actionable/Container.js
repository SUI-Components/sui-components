import {forwardRef} from 'react'

import PropTypes from 'prop-types'

import useControlledState from '@s-ui/react-hooks/lib/useControlledState'

import {LINK_TYPES, onHandler} from '../constants.js'

/**
 * Component treated as an anchor when href is defined
 */
const ActionableTagContainer = forwardRef(
  (
    {
      link: Link,
      href,
      target,
      rel,
      readOnly,
      disabled,
      children,
      pressed,
      defaultPressed,
      onClick,
      label,
      value,
      ...props
    },
    forwardedRef
  ) => {
    const isButton = href === undefined
    const Component = isButton ? 'button' : Link
    const [innerPressed, setInnerPressed] = useControlledState(pressed, defaultPressed)
    const onClickHandler = (event, {...args}) => {
      if (disabled || readOnly) return
      const hasPressed = innerPressed !== undefined
      onClick && onClick(event, {...args, ...(hasPressed && {label, value, pressed: !!innerPressed})})
      if (hasPressed) {
        setInnerPressed(!innerPressed)
      }
    }
    return (
      <Component
        ref={forwardedRef}
        {...(href ? {href, target, rel} : {})}
        {...(disabled && {disabled})}
        {...(readOnly && !disabled && {'data-read-only': readOnly})}
        {...(innerPressed !== undefined && {'aria-pressed': innerPressed})}
        onClick={onHandler({disabled, readOnly}, onClickHandler)}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

ActionableTagContainer.propTypes = {
  link: PropTypes.node,
  href: PropTypes.string,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  rel: PropTypes.arrayOf(PropTypes.oneOf(Object.values(LINK_TYPES))),
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  pressed: PropTypes.bool,
  defaultPressed: PropTypes.bool,
  onClick: PropTypes.func,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default ActionableTagContainer
