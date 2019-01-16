/* eslint-disable react/prop-types */
import React from 'react'
import {handlersFactory} from '@s-ui/react-molecule-dropdown-option'

const BASE_CLASS = 'DemoAlternativeOption'

const AlternativeOption = ({children, onSelect, innerRef, value}) => {
  const {handleClick, handleKeyDown, handleFocus} = handlersFactory({
    value,
    onSelect
  })

  return (
    <div
      className={BASE_CLASS}
      ref={innerRef}
      tabIndex="0"
      onFocus={handleFocus}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  )
}

AlternativeOption.displayName = 'AlternativeOption'

AlternativeOption.defaultProps = {
  onSelect: () => {},
  innerRef: React.createRef()
}

export default AlternativeOption
