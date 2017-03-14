import React, {PropTypes} from 'react'
import cx from 'classnames'

export default function ListItem ({handleSelect, isActive, item}) {
  const classes = cx('sui-FormAutocompleted-resultsItem', {
    'is-active': isActive
  })

  return (
    <li
      className={classes}
      onClick={handleSelect.bind(null, item)}>
      {item.content}
    </li>
  )
}

ListItem.propTypes = {
  item: PropTypes.object,
  handleSelect: PropTypes.func,
  isActive: PropTypes.bool
}
