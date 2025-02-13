import {forwardRef} from 'react'

import AtomInput, {inputTypes} from '@s-ui/react-atom-input'

import {useDropdown} from '../config.js'
import {getClassSearch} from './config.js'

const Search = forwardRef((props, forwardedRef) => {
  const {setInputRef, isOpen, onSearch, searchPlaceholder, searchIcon} = useDropdown()

  const onChange = (_ev, {value}) => {
    typeof onSearch === 'function' && setTimeout(() => onSearch({value}))
  }

  return (
    <div className={getClassSearch(isOpen)}>
      <AtomInput
        ref={forwardedRef}
        type={inputTypes.TEXT}
        value={setInputRef?.current?.value}
        reference={setInputRef}
        onChange={onChange}
        placeholder={searchPlaceholder}
        leftIcon={searchIcon}
        {...props}
      />
    </div>
  )
})

Search.displayName = 'Search'

export default Search
