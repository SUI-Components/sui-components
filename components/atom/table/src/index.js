import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const CELL_TYPE = {
  header: 'th',
  data: 'td'
}

const CELL_PADDING = {
  none: false,
  xs: 'xs',
  s: 's',
  m: 'm',
  l: 'l',
  xl: 'l'
}

const AtomTable = ({
  head,
  body,
  foot,
  fullWidth,
  cellPadding = CELL_PADDING.none,
  borderBottom = false
}) => {
  const hasHead = Boolean(head?.length)
  const hasFoot = Boolean(foot?.length)
  const baseClass = 'react-AtomTable'
  const tableClass = cx(`${baseClass}`, {
    [`${baseClass}--fullWidth`]: fullWidth
  })
  const headerClass = cx(`${baseClass}-cell`, `${baseClass}-headerCell`, {
    [`${baseClass}-cell--${cellPadding}`]: cellPadding
  })

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
          <tr key={index}>
            {row.map((cell, index) => {
              const {
                type: Element = CELL_TYPE.data,
                content = '',
                isNowrap,
                colspan = 1
              } = cell
              const cellClassName = cx(`${baseClass}-cell`, {
                [`${baseClass}-cell--noWrap`]: isNowrap,
                [`${baseClass}-cell--${cellPadding}`]: cellPadding,
                [`${baseClass}-cell--borderBottom`]: borderBottom
              })

              return (
                <Element
                  key={index}
                  className={cellClassName}
                  colspan={colspan}
                >
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
              <td key={index} className={`${baseClass}-cell`}>
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
        type: PropTypes.oneOf(Object.values(CELL_TYPE)),
        isNowrap: PropTypes.bool
      })
    )
  ).isRequired,
  /**
   * Cell padding size (xs,x,m,l,xl)
   */
  cellPadding: PropTypes.oneOf(Object.values(CELL_PADDING)),
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
  borderBottom: PropTypes.bool
}

export {CELL_TYPE as atomTableCellTypes, CELL_PADDING as atomTableCellPadding}
export default AtomTable
