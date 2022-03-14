export const BASE_CLASS = `sui-MoleculeDropdownList`
export const CLASS_HIDDEN = `is-hidden`
export const DEBOUNCE_TIME = 500

export const DESIGNS = {
  FLAT: 'flat',
  SOLID: 'solid'
}

export const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}

export const moleculeDropdownListSelectHandler = {
  single: ({value, onSelect}) => (
    event,
    {value: valueHandled, selected: selectedHandler, ...args}
  ) => {
    typeof onSelect === 'function' &&
      onSelect(event, {
        value:
          selectedHandler || value !== valueHandled ? valueHandled : undefined,
        selected: selectedHandler,
        ...args
      })
  },
  multiple: ({value: valueState = [], onSelect}) => (
    event,
    {value: valueHandled, selected: selectedHandler, ...args}
  ) => {
    let selected = !valueState.includes(valueHandled)
    if (selectedHandler === undefined) {
      selected = selectedHandler
    }
    const value = selected
      ? [...valueState.filter(val => val !== valueHandled), valueHandled]
      : valueState.filter(val => val !== valueHandled)
    typeof onSelect === 'function' &&
      onSelect(event, {
        value,
        selected,
        ...args
      })
  }
}
