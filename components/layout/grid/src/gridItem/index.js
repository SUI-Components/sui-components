import {useMemo} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import PolymorphicElement from '@s-ui/react-primitive-polymorphic-element'

import {BASE_CLASS, CELL_NUMBERS} from '../settings.js'
import {getColSpanClassNamesTransform} from './settings.js'

export default function LayoutGridItem({
  as = 'div',
  children,
  className,
  colSpan = 1,
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
}) {
  const spanClassnames = useMemo(
    () => getColSpanClassNamesTransform({colSpan, xxl, xl, l, m, s, xs, xxs}),
    [colSpan, xxl, xl, l, m, s, xs, xxs]
  )
  const classNames = cx(
    `${BASE_CLASS}-item`,
    spanClassnames,
    xxsOffset && `${BASE_CLASS}-item--xxsOffset-${xxsOffset}`,
    xsOffset && `${BASE_CLASS}-item--xsOffset-${xsOffset}`,
    sOffset && `${BASE_CLASS}-item--sOffset-${sOffset}`,
    mOffset && `${BASE_CLASS}-item--mOffset-${mOffset}`,
    lOffset && `${BASE_CLASS}-item--lOffset-${lOffset}`,
    xlOffset && `${BASE_CLASS}-item--xlOffset-${xlOffset}`,
    xxlOffset && `${BASE_CLASS}-item--xxlOffset-${xxlOffset}`,
    className
  )

  return (
    <PolymorphicElement as={as} className={classNames} {...props}>
      {children}
    </PolymorphicElement>
  )
}

LayoutGridItem.displayName = 'LayoutGridItem'

LayoutGridItem.propTypes = {
  as: PropTypes.elementType,
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Allows you to add extra styles and avoid extra DOM elements to style purposes.
   */
  className: PropTypes.string,
  /***
   * Defines the number of columns an item should span
   */
  colSpan: PropTypes.oneOfType([
    PropTypes.oneOf(CELL_NUMBERS),
    PropTypes.objectOf(PropTypes.oneOf(CELL_NUMBERS))
  ]),
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
