import {Children} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import {atomButtonDesigns, atomButtonSizes} from '@s-ui/react-atom-button'
import Injector from '@s-ui/react-primitive-injector'
import Poly from '@s-ui/react-primitive-polymorphic-element'

import {BASE_CLASS} from './settings.js'

const getGroupPosition =
  ({groupPositions, numChildren}) =>
  index => {
    if (index === 0) return groupPositions.FIRST
    if (index === numChildren - 1) return groupPositions.LAST
    return groupPositions.MIDDLE
  }

const MoleculeButtonGroup = ({
  as = 'div',
  children,
  fullWidth,
  size,
  design,
  negative,
  groupPositions,
  onClick,
  ...props
}) => {
  const numChildren = children.length
  const getGroupPositionByIndex = getGroupPosition({
    groupPositions,
    numChildren
  })
  const extendedChildren = Children.toArray(children)
    .filter(Boolean)
    .map((child, index) => {
      const groupPosition = getGroupPositionByIndex(index)

      return (
        <Injector
          {...props}
          negative={negative}
          size={size}
          design={design}
          groupPosition={groupPosition}
          fullWidth={fullWidth}
          onClick={onClick}
        >
          {child}
        </Injector>
      )
    })
  return (
    <Poly className={cx(BASE_CLASS, fullWidth && `${BASE_CLASS}--fullWidth`)}>
      {extendedChildren}
    </Poly>
  )
}

MoleculeButtonGroup.displayName = 'MoleculeButtonGroup'

MoleculeButtonGroup.propTypes = {
  /** the html element tag type of teh component **/
  as: PropTypes.elementType,

  children: PropTypes.arrayOf(PropTypes.element),

  /** If buttons should stretch to fit the width of container */
  fullWidth: PropTypes.bool,

  /** groupPositions constants (FIRST, MIDDLE, LAST) */
  groupPositions: PropTypes.object,

  /**
   * Negative: style for dark backgrounds.
   */
  negative: PropTypes.bool,

  /**
   * Design style of button: 'solid' (default), 'outline', 'flat', 'link'
   */
  design: PropTypes.oneOf(Object.values(atomButtonDesigns)),
  /**
   * Size of button 'small' (default), 'large'
   */
  size: PropTypes.oneOf(Object.values(atomButtonSizes)),

  /**
   * common click handler fired every inner button is triggered.
   */
  onClick: PropTypes.func
}

MoleculeButtonGroup.defaultProps = {
  groupPositions: {
    FIRST: 'first',
    MIDDLE: 'middle',
    LAST: 'last'
  }
}

export default MoleculeButtonGroup

export {
  atomButtonDesigns as moleculeButtonGroupDesigns,
  atomButtonSizes as moleculeButtonGroupSizes
}
