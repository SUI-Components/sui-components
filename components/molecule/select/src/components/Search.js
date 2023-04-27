import {useState} from 'react'

import AtomInput, {inputTypes} from '@s-ui/react-atom-input'

import {useDropdown} from '../config.js'
import {getClassSearch} from './config.js'

export default function Search(props) {
  const [value, setValue] = useState('')

  const {
    setInputRef,
    isOpen,
    focusFirstOption,
    onSearch,
    searchPlaceholder,
    searchIcon
  } = useDropdown()

  const handleKeyDown = ev => {
    setTimeout(() => focusFirstOption(ev))
  }

  const onChange = (_ev, {value}) => {
    setValue(value)
    typeof onSearch === 'function' && setTimeout(() => onSearch({value}))
  }

  return (
    <div className={getClassSearch(isOpen)} onKeyDown={handleKeyDown}>
      <AtomInput
        type={inputTypes.TEXT}
        value={value}
        reference={setInputRef}
        onChange={onChange}
        placeholder={searchPlaceholder}
        leftIcon={searchIcon}
        {...props}
      />
    </div>
  )
}

Search.displayName = 'Search'
