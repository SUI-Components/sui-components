import PropTypes from 'prop-types'
import cx from 'classnames'

import {BASE_CLASS, CELL_NUMBERS} from '../settings'

export default function LayoutGridItem({
  children,
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
