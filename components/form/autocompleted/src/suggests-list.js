import React, {PropTypes} from 'react'
import ListItem from './list-item'

export default function SuggestsList (props) {
  return (
    <ul className='sui-FormAutocompleted-suggests'>
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

SuggestsList.propTypes = {
  suggests: PropTypes.array.isRequired,
  active: PropTypes.number
}
