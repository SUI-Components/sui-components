export const BASE_CLASS = 'sui-MoleculeAccordion'
export const BASE_CLASS_ELEMENT = 'sui-MoleculeAccordionElement'
export const BASE_CLASS_ITEM = `${BASE_CLASS}Item`
export const BASE_CLASS_ITEM_HEADER = `${BASE_CLASS_ITEM}Header`
export const BASE_CLASS_ITEM_HEADER_ICON = `${BASE_CLASS_ITEM_HEADER}Icon`
export const BASE_CLASS_ITEM_PANEL = `${BASE_CLASS_ITEM}Panel`
export const BASE_CLASS_ITEM_PANEL_CONTENT = `${BASE_CLASS_ITEM}PanelContent`

export const BEHAVIOR = {
  SINGLE: 'single',
  MULTIPLE: 'multiple'
}

const behaviors = {
  [BEHAVIOR.SINGLE]: ({value, values}) => {
    const hasValue = values.includes(value)
    return {
      value,
      isExpanded: !hasValue,
      values: hasValue ? [] : [value]
    }
  },
  [BEHAVIOR.MULTIPLE]: ({value, values}) => {
    const hasValue = values.includes(value)
    return {
      value,
      isExpanded: !hasValue,
      values: hasValue
        ? values.filter(val => val !== value)
        : [...values, value]
    }
  },
  [undefined]: ({value, isExpanded, values}) => {
    return {
      value,
      isExpanded,
      values
    }
  }
}

export const getBehavior = behaviorName => behaviors[behaviorName]

export const getIcon = (
  {iconProp, isExpanded},
  {iconExpanded, iconCollapsed}
) => {
  if (iconProp) {
    return iconProp
  }
  return isExpanded ? iconExpanded : iconCollapsed
}

export const SPACING = {
  XS: 'xs',
  S: 's',
  M: 'm',
  L: 'l',
  XL: 'xl'
}

export const ANIMATION_DURATION = {
  NONE: 0,
  FAST: 100,
  NORMAL: 300,
  SLOW: 500
}

export const HEADER_ICON_POSITION = {
  LEFT: 'left',
  RIGHT: 'right'
}
