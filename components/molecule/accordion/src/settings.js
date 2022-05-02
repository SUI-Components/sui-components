export const BASE_CLASS = 'sui-MoleculeAccordion'
export const BASE_CLASS_ITEM = `${BASE_CLASS}Item`
export const BASE_CLASS_ITEM_HEADER = `${BASE_CLASS_ITEM}Header`
export const BASE_CLASS_ITEM_HEADER_ICON = `${BASE_CLASS_ITEM_HEADER}Icon`
export const BASE_CLASS_ITEM_PANEL = `${BASE_CLASS_ITEM}Panel`

export const BEHAVIOR = {
  SINGLE: 'single',
  MULTIPLE: 'mutiple'
}

const onChangeHandler = {
  [BEHAVIOR.SINGLE]:
    ({value, isExpanded, values, onChange}) =>
    event =>
      typeof onChange === 'function' &&
      onChange(event, {value, isExpanded, values}),
  [BEHAVIOR.MULTIPLE]:
    ({value, isExpanded, values, onChange}) =>
    event =>
      typeof onChange === 'function' &&
      onChange(event, {value, isExpanded, values})
}

export const isAccordionItemPanelExpanded = ({isExpanded, values, value}) =>
  isExpanded !== undefined ? isExpanded : values.includes(value)

export const SPACING = {
  XS: 'xs',
  S: 's',
  M: 'm',
  L: 'l',
  XL: 'xl'
}
