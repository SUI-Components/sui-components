import {Children} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import {atomButtonDesigns, atomButtonSizes} from '@s-ui/react-atom-button'
import Injector from '@s-ui/react-primitive-injector'
import Poly from '@s-ui/react-primitive-polymorphic-element'

import {DEFAULT_COLUMNS, DISPLAY, SPACED} from './config.js'
import {BASE_CLASS} from './settings.js'

const getGroupPosition =
  ({groupPositions, numChildren, spaced}) =>
  index => {
    if (spaced) {
      return groupPositions.UNSET
    } else {
      if (index === 0) return groupPositions.FIRST
      if (index === numChildren - 1) return groupPositions.LAST
      return groupPositions.MIDDLE
    }
  }

const MoleculeButtonGroup = ({
  as = 'div',
  children,
  columns,
  fullWidth,
  size,
  design,
  display,
  negative,
  groupPositions = {
    FIRST: 'first',
    MIDDLE: 'middle',
    LAST: 'last',
    UNSET: 'unset'
  },
  onClick,
  spaced,
  isVertical,
  ...props
}) => {
  const numChildren = children.length

  const getGroupPositionByIndex = getGroupPosition({
    spaced,
    groupPositions,
    numChildren
  })

  const getClassSpaced = ({spaced = SPACED.MEDIUM}) => {
    return `${BASE_CLASS}--spaced-${spaced}`
  }

  const getClassDisplay = ({display = DISPLAY.FLEX}) => {
    return `${BASE_CLASS}--display-${display}`
  }

  const getClassDisplayColumns = ({display = DISPLAY.FLEX, columns = DEFAULT_COLUMNS}) => {
    if (display === DISPLAY.GRID && columns) return `${BASE_CLASS}--col-${columns}`
    return ''
  }

  const CLASS_SPACED = getClassSpaced({spaced})

  const CLASS_DISPLAY = getClassDisplay({display})
  const CLASS_DISPLAY_COLUMNS = getClassDisplayColumns({display, columns})

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
          spaced={spaced}
          onClick={onClick}
        >
          {child}
        </Injector>
      )
    })
  return (
    <Poly
      className={cx(
        BASE_CLASS,
        fullWidth && `${BASE_CLASS}--fullWidth`,
        display && CLASS_DISPLAY,
        display && CLASS_DISPLAY_COLUMNS,
        spaced && CLASS_SPACED,
        isVertical && `${BASE_CLASS}--vertical`
      )}
    >
      {extendedChildren}
    </Poly>
  )
}

MoleculeButtonGroup.displayName = 'MoleculeButtonGroup'

MoleculeButtonGroup.propTypes = {
  /** the html element tag type of teh component **/
  as: PropTypes.elementType,

  children: PropTypes.arrayOf(PropTypes.element),

  /** Number of columns (2, 3 or 4) if display is set to grid */
  columns: PropTypes.oneOf([2, 3, 4]),

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
  onClick: PropTypes.func,

  /**
   * configure the gap between the buttons of the group
   **/
  spaced: PropTypes.oneOf(Object.values(SPACED)),

  /**
   * configure the display of component. Flex by default
   **/
  display: PropTypes.oneOf(Object.values(DISPLAY)),

  /** buttons should have a vertical layout */
  isVertical: PropTypes.bool
}

export default MoleculeButtonGroup

export {
  atomButtonDesigns as moleculeButtonGroupDesigns,
  atomButtonSizes as moleculeButtonGroupSizes,
  SPACED as moleculeButtonGroupSpaced,
  DISPLAY as moleculeButtonGroupDisplay
}
