import React, {PropTypes} from 'react'
import ListItem from './list-item'

export default function ResultsList (props) {
  return (
    <ul className='sui-FormAutocompleted-results'>
      {props.suggests.map((suggest, index) =>
        (<ListItem
          {...props}
          key={suggest.id || index}
          item={suggest}
          isActive={index === props.active} />
        )
      )}
    </ul>
  )
}

ResultsList.propTypes = {
  suggests: PropTypes.array.isRequired,
  active: PropTypes.number
}
