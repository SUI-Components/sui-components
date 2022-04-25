import {Children as ReactChildren, isValidElement, cloneElement} from 'react'
import PropTypes from 'prop-types'

const Children = ({
  children,
  combineProps = (ownProps, childProps) => ({...ownProps, ...childProps}),
  ...props
}) => {
  return ReactChildren.toArray(children)
    .filter(child => isValidElement(child))
    .map((child, index) =>
      cloneElement(child, combineProps(props, child?.props))
    )
}

Children.displayName = 'Children'

Children.propTypes = {children: PropTypes.node, mergeProps: PropTypes.func}

export default Children
