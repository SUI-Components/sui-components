import cx from 'classnames'
import PropTypes from 'prop-types'

import {BASE_CLASS, CELL_BASE_CLASS, ROW_BASE_CLASS, TABLE_CELL_PADDING, TABLE_CELL_TYPE} from './settings.js'

const AtomTable = ({
  head = [],
  body,
  rowClass,
  foot = [],
  fullWidth,
  cellPadding,
  borderBottom,
  onRowClick,
  zebraStriped
}) => {
  const hasHead = Boolean(head.length)
  const hasFoot = Boolean(foot.length)
  const isRowActionable = Boolean(onRowClick)
  const tableClass = cx(`${BASE_CLASS}`, {
    [`${BASE_CLASS}--fullWidth`]: Boolean(fullWidth)
  })
  const headerClass = cx(`${CELL_BASE_CLASS}`, `${BASE_CLASS}-headerCell`, {
    [`${CELL_BASE_CLASS}--${cellPadding}`]: Boolean(cellPadding)
  })

  const handleOnRowClick = index => onRowClick(index)

  return (
    <table className={tableClass}>
      {hasHead && (
        <thead>
          <tr>
            {head.map((element, index) => (
              <th key={index} className={headerClass}>
                {element}
              </th>
            ))}
          </tr>
        </thead>
      )}

      <tbody>
        {body.map((row, index) => (
          <tr
            key={index}
            className={
              (cx(`${ROW_BASE_CLASS}`, {
                [`${ROW_BASE_CLASS}--actionable`]: isRowActionable,
                [`${ROW_BASE_CLASS}--zebraStriped`]: zebraStriped
              }),
              typeof rowClass === 'string' && rowClass,
              typeof rowClass === 'function' && rowClass(row, index))
            }
            {...(isRowActionable && {onClick: () => handleOnRowClick(index)})}
          >
            {row.map((cell, index) => {
              const {type: Element = TABLE_CELL_TYPE.data, content = '', isNowrap, colspan = 1} = cell
              const cellClassName = cx(`${CELL_BASE_CLASS}`, {
                [`${CELL_BASE_CLASS}--noWrap`]: isNowrap,
                [`${CELL_BASE_CLASS}--${cellPadding}`]: Boolean(cellPadding),
                [`${CELL_BASE_CLASS}--borderBottom`]: Boolean(borderBottom)
              })

              return (
                <Element key={index} className={cellClassName} colSpan={colspan}>
                  {content}
                </Element>
              )
            })}
          </tr>
        ))}
      </tbody>

      {hasFoot && (
        <tfoot>
          <tr>
            {foot.map((element, index) => (
              <td key={index} className={`${CELL_BASE_CLASS}`}>
                {element}
              </td>
            ))}
          </tr>
        </tfoot>
      )}
    </table>
  )
}

AtomTable.displayName = 'AtomTable'

AtomTable.propTypes = {
  /**
   * Table head content
   */
  head: PropTypes.array,
  /**
   * Table body content.
   * You can define per row:
   *  - colspan: as a number
   *  - content: as a string or React component
   *  - type: of cell (th,td)
   *  - isNowrap: to add no-wrap behavior to the cell
   */
  body: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        colspan: PropTypes.number,
        content: PropTypes.string.isRequired,
        type: PropTypes.oneOf(Object.values(TABLE_CELL_TYPE)),
        isNowrap: PropTypes.bool
      })
    )
  ).isRequired,
  /**
   * Specifies the class name(s) or a function to dynamically assign class names for a row.
   *
   * @typedef {(string|function)} rowClass
   * @property {string} [optional] Static class name(s) to be applied to the row.
   * @property {function} [optional] A function that returns a class name string, based on dynamic conditions.
   */
  rowClass: PropTypes.oneOf(PropTypes.string, PropTypes.func),
  /**
   * Cell padding size (xs,x,m,l,xl)
   */
  cellPadding: PropTypes.oneOf(Object.values(TABLE_CELL_PADDING)),
  /**
   * Table foot conntent
   */
  foot: PropTypes.array,
  /**
   * With fullWith you have a full width behavior
   */
  fullWidth: PropTypes.bool,
  /**
   * Add a default border bootom to all cells
   */
  borderBottom: PropTypes.bool,
  /**
   * Trigger callback with row index clicked
   */
  onRowClick: PropTypes.func,
  /**
   * Add interspersed stripes to rows
   */
  zebraStriped: PropTypes.bool
}

export {TABLE_CELL_TYPE as atomTableCellTypes, TABLE_CELL_PADDING as atomTableCellPadding}
export default AtomTable
