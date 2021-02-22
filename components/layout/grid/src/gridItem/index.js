import PropTypes from 'prop-types'
import cx from 'classnames'

import {BASE_CLASS, CELL_NUMBERS, BREAKPOINTS} from '../settings'

const getColSpanClassNamesTransform = ({colSpan, ...otherProps}) => {
  const className = []
  if (CELL_NUMBERS.includes(colSpan) && otherProps.xxs === undefined) {
    className.push(`${BASE_CLASS}-item--xxs-${colSpan}`)
  } else if (typeof colSpan === 'object') {
    Object.values(BREAKPOINTS).forEach(breakpoint => {
      if (
        CELL_NUMBERS.includes(colSpan[breakpoint]) &&
        otherProps[breakpoint] === undefined
      ) {
        className.push(
          `${BASE_CLASS}-item--${breakpoint}-${colSpan[[breakpoint]]}`
        )
      }
    })
  }
  return className.join(' ')
}

export default function LayoutGridItem({
  children,
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
  xxsOffset
}) {
  const classNames = cx(
    `${BASE_CLASS}-item`,
    getColSpanClassNamesTransform({colSpan, xxl, xl, l, m, s, xs, xxs}),
    l && `${BASE_CLASS}-item--l-${l}`,
    lOffset && `${BASE_CLASS}-item--lOffset-${lOffset}`,
    m && `${BASE_CLASS}-item--m-${m}`,
    mOffset && `${BASE_CLASS}-item--mOffset-${mOffset}`,
    s && `${BASE_CLASS}-item--s-${s}`,
    sOffset && `${BASE_CLASS}-item--sOffset-${sOffset}`,
    xl && `${BASE_CLASS}-item--xl-${xl}`,
    xlOffset && `${BASE_CLASS}-item--xlOffset-${xlOffset}`,
    xs && `${BASE_CLASS}-item--xs-${xs}`,
    xsOffset && `${BASE_CLASS}-item--xsOffset-${xsOffset}`,
    xxl && `${BASE_CLASS}-item--xxl-${xxl}`,
    xxlOffset && `${BASE_CLASS}-item--xxlOffset-${xxlOffset}`,
    xxs && `${BASE_CLASS}-item--xxs-${xxs}`,
    xxsOffset && `${BASE_CLASS}-item--xxsOffset-${xxsOffset}`
  )

  return <div className={classNames}>{children}</div>
}

LayoutGridItem.displayName = 'LayoutGridItem'

LayoutGridItem.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
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
