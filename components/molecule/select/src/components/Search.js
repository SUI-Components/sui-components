import AtomInput, {inputTypes} from '@s-ui/react-atom-input'

import {useDropdown} from '../config.js'
import {getClassSearch} from './config.js'

export default function Search(props) {
  const {setInputRef, isOpen, onSearch, searchPlaceholder, searchIcon} =
    useDropdown()

  const onChange = (_ev, {value}) => {
    typeof onSearch === 'function' && setTimeout(() => onSearch({value}))
  }

  return (
    <div className={getClassSearch(isOpen)}>
      <AtomInput
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
}

Search.displayName = 'Search'
