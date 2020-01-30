import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const CELL_TYPE = {
  header: 'th',
  data: 'td'
}

const AtomTable = ({head, body, foot, fullWidth}) => {
  const hasHead = Boolean(head?.length)
  const hasFoot = Boolean(foot?.length)
  const baseClass = 'react-AtomTable'
  const tableClass = cx(`${baseClass}`, {
    'react-AtomTable--fullWidth': fullWidth
  })

  return (
    <table className={tableClass}>
      {hasHead && (
        <thead>
          <tr>
            {head.map((element, index) => (
              <th
                key={index}
                className={`${baseClass}-cell ${baseClass}-headerCell`}
              >
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
              const {type: Element = CELL_TYPE.data} = cell
              const cellClassName = cx(`${baseClass}-cell`, {
                'react-AtomTable-cell--noWrap': cell.isNowrap
              })

              return (
                <Element key={index} className={cellClassName}>
                  {cell.content}
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
  head: PropTypes.array,
  body: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        content: PropTypes.string.isRequired,
        type: PropTypes.oneOf(Object.values(CELL_TYPE)),
        isNowrap: PropTypes.bool
      })
    )
  ).isRequired,
  foot: PropTypes.array,
  fullWidth: PropTypes.bool
}

export {CELL_TYPE as AtomTableTypes}
export default AtomTable
