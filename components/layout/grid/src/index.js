import cx from 'classnames'
import PropTypes from 'prop-types'

import Injector from '@s-ui/react-primitive-injector'
import PolymorphicElement from '@s-ui/react-primitive-polymorphic-element'

import LayoutGridItem from './gridItem/index.js'
import {getGutterClassNames, transition} from './helpers.js'
import {
  ALIGN_CONTENT,
  ALIGN_ITEMS,
  BASE_CLASS,
  BREAKPOINTS,
  CELL_NUMBERS,
  GUTTER_VALUES,
  JUSTIFY_CONTENT
} from './settings.js'

const LayoutGrid = ({
  alignContent,
  alignItems,
  as = 'div',
  children,
  justifyContent,
  gutter,
  className,
  colSpan,
  l,
  lOffset,
  m,
  mOffset,
  s,
  sOffset,
  xl,
  xlOffset,
  xs,
  xsOffset,
  xxl,
  xxlOffset,
  xxs,
  xxsOffset,
  ...props
}) => {
  const classNames = cx(
    `${BASE_CLASS}`,
    Object.values(ALIGN_CONTENT).includes(alignContent) && `${BASE_CLASS}--ac-${alignContent}`,
    Object.values(ALIGN_ITEMS).includes(alignItems) && `${BASE_CLASS}--ai-${alignItems}`,
    Object.values(JUSTIFY_CONTENT).includes(justifyContent) && `${BASE_CLASS}--jc-${justifyContent}`,
    getGutterClassNames(gutter),
    className
  )

  return (
    <PolymorphicElement as={as} className={classNames} {...props}>
      <Injector
        colSpan={colSpan}
        l={l}
        lOffset={lOffset}
        m={m}
        mOffset={mOffset}
        s={s}
        sOffset={sOffset}
        xl={xl}
        xlOffset={xlOffset}
        xs={xs}
        xsOffset={xsOffset}
        xxl={xxl}
        xxlOffset={xxlOffset}
        xxs={xxs}
        xxsOffset={xxsOffset}
      >
        {children}
      </Injector>
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
   * Allows you to add extra styles and avoid extra DOM elements to style purposes.
   */
  className: PropTypes.string,
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
  ]),
  /***
   * Defines the number of columns an item should span
   */
  colSpan: PropTypes.oneOfType([PropTypes.oneOf(CELL_NUMBERS), PropTypes.objectOf(PropTypes.oneOf(CELL_NUMBERS))]),
  /**
   * Number of cells the component has to fill. It's applied for the `l` breakpoint and wider screens.
   */
  l: PropTypes.oneOf(CELL_NUMBERS),
  /**
   * Number of cells offset to move component. It's applied for the `l` breakpoint and wider screens.
   */
  lOffset: PropTypes.oneOf(CELL_NUMBERS),
  /**
   * Number of cells the component has to fill. It's applied for the `m` breakpoint and wider screens.
   */
  m: PropTypes.oneOf(CELL_NUMBERS),
  /**
   * Number of cells offset to move component. It's applied for the `m` breakpoint and wider screens.
   */
  mOffset: PropTypes.oneOf(CELL_NUMBERS),
  /**
   * Number of cells the component has to fill. It's applied for the `s` breakpoint and wider screens.
   */
  s: PropTypes.oneOf(CELL_NUMBERS),
  /**
   * Number of cells offset to move component. It's applied for the `s` breakpoint and wider screens.
   */
  sOffset: PropTypes.oneOf(CELL_NUMBERS),
  /**
   * Number of cells the component has to fill. It's applied for the `xl` breakpoint and wider screens.
   */
  xl: PropTypes.oneOf(CELL_NUMBERS),
  /**
   * Number of cells offset to move component. It's applied for the `xl` breakpoint and wider screens.
   */
  xlOffset: PropTypes.oneOf(CELL_NUMBERS),
  /**
   * Number of cells the component has to fill. It's applied for the `xs` breakpoint and wider screens.
   */
  xs: PropTypes.oneOf(CELL_NUMBERS),
  /**
   * Number of cells offset to move component. It's applied for the `xs` breakpoint and wider screens.
   */
  xsOffset: PropTypes.oneOf(CELL_NUMBERS),
  /**
   * Number of cells the component has to fill. It's applied for the `xxl` breakpoint and wider screens.
   */
  xxl: PropTypes.oneOf(CELL_NUMBERS),
  /**
   * Number of cells offset to move component. It's applied for the `xxl` breakpoint and wider screens.
   */
  xxlOffset: PropTypes.oneOf(CELL_NUMBERS),
  /**
   * Number of cells the component has to fill. It's applied for the `xxs` breakpoint and wider screens.
   */
  xxs: PropTypes.oneOf(CELL_NUMBERS),
  /**
   * Number of cells offset to move component. It's applied for the `xxs` breakpoint and wider screens.
   */
  xxsOffset: PropTypes.oneOf(CELL_NUMBERS)
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
