import AtomInput, {inputTypes} from '@s-ui/react-atom-input'

import {useDropdown} from '../config.js'
import {getClassSearch} from './config.js'

export default function Search(props) {
  const {setInputRef, isOpen, focusFirstOption, onSearch, searchPlaceholder} =
    useDropdown()

  const handleKeyDown = ev => {
    setTimeout(() => focusFirstOption(ev))
  }

  return (
    <div className={getClassSearch(isOpen)} onKeyDown={handleKeyDown}>
      <AtomInput
        type={inputTypes.TEXT}
        reference={setInputRef}
        onChange={(_ev, {value}) => onSearch({value})}
        placeholder={searchPlaceholder}
        {...props}
      />
    </div>
  )
}

Search.displayName = 'Search'
