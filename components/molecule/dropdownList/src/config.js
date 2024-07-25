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

export const POSITIONS = {
  TOP: 'top',
  BOTTOM: 'bottom'
}

export const moleculeDropdownListSelectHandler = {
  single:
    ({value, onSelect}) =>
    (event, {value: valueHandled, selected: selectedHandled, ...args}) => {
      typeof onSelect === 'function' &&
        onSelect(event, {
          value: selectedHandled || value !== valueHandled ? valueHandled : undefined,
          selected: selectedHandled,
          ...args
        })
    },
  multiple:
    ({value: valueState = [], onSelect}) =>
    (event, {value: valueHandled, selected: selectedHandled, ...args}) => {
      let selected = !valueState.includes(valueHandled)
      if (selectedHandled === undefined) {
        selected = selectedHandled
      }
      const value =
        selected === true || !valueState.includes(valueHandled)
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
