import PropTypes from 'prop-types'
import cx from 'classnames'
import PolymorphicElement from '@s-ui/react-primitive-polymorphic-element'

import {
  ALIGN_ITEMS,
  ALIGN_CONTENT,
  BASE_CLASS,
  JUSTIFY_CONTENT,
  GUTTER_VALUES,
  CELL_NUMBERS,
  BREAKPOINTS
} from './settings.js'
import LayoutGridItem from './gridItem/index.js'
import {getGutterClassNames, transition} from './helpers.js'

function LayoutGrid({
  alignContent,
  alignItems,
  as = 'div',
  children,
  justifyContent,
  gutter
}) {
  const classNames = cx(
    `${BASE_CLASS}`,
    Object.values(ALIGN_CONTENT).includes(alignContent) &&
      `${BASE_CLASS}--ac-${alignContent}`,
    Object.values(ALIGN_ITEMS).includes(alignItems) &&
      `${BASE_CLASS}--ai-${alignItems}`,
    Object.values(JUSTIFY_CONTENT).includes(justifyContent) &&
      `${BASE_CLASS}--jc-${justifyContent}`,
    getGutterClassNames(gutter)
  )

  return (
    <PolymorphicElement as={as} className={classNames}>
      {children}
    </PolymorphicElement>
  )
}

LayoutGrid.displayName = 'LayoutGrid'

LayoutGrid.propTypes = {
  as: PropTypes.elementType,
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Sets the grid-line-self alignment. It's applied for all screen sizes.
   */
  alignContent: PropTypes.oneOf(Object.values(ALIGN_CONTENT)),
  /**
   * Sets the align-self value on all direct children as a group. It's applied for all screen sizes.
   */
  alignItems: PropTypes.oneOf(Object.values(ALIGN_ITEMS)),
  /**
   * Distribute space between and around content items. It's applied for all screen sizes.
   */
  justifyContent: PropTypes.oneOf(Object.values(JUSTIFY_CONTENT)),
  /***
   * Spacing between cells.
   */
  gutter: PropTypes.oneOfType([
    PropTypes.oneOf(Object.values(GUTTER_VALUES)),
    PropTypes.objectOf(PropTypes.oneOf(Object.values(GUTTER_VALUES)))
  ])
}

const DeprecatedLayoutGrid = props => <LayoutGrid {...transition(props)} />

export default LayoutGrid

export {
  DeprecatedLayoutGrid,
  LayoutGridItem,
  ALIGN_CONTENT as LayoutGridAlignContent,
  ALIGN_ITEMS as LayoutGridAlignItems,
  JUSTIFY_CONTENT as LayoutGridJustifyContent,
  GUTTER_VALUES as LayoutGridGutterValues,
  CELL_NUMBERS as LayoutGridCellNumbers,
  BREAKPOINTS as LayoutGridBreakpoints
}
