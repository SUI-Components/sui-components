import {BASE_CLASS, DESIGN} from '../settings.js'

export const BASE_CLASS_STEP = `${BASE_CLASS}Step`
export const BASE_CLASS_STEP_LABEL = `${BASE_CLASS_STEP}Label`
export const BASE_CLASS_STEP_ICON = `${BASE_CLASS_STEP}Icon`

export const getIcon = ({
  design,
  visited,
  current,
  step,
  icon,
  iconContext,
  visitedIcon,
  visitedIconContext,
  currentIcon,
  currentIconContext
}) => {
  if (design === DESIGN.COMPRESSED) return null
  else if (design === DESIGN.BASIC) return null
  else if (visited && !current) {
    return visitedIcon || visitedIconContext || step
  } else if (current && !visited) {
    return currentIcon || currentIconContext || step
  }
  return icon || iconContext || step
}

export const getLabel = ({label, steps, step, design, current}) => {
  if (design === DESIGN.DEFAULT) return label
  if (design === DESIGN.BASIC) return label
  if (design === DESIGN.COMPRESSED)
    return (
      <>
        <span>{`${step}/${steps}`}</span>
        {label && <span>:&nbsp;{label}</span>}
      </>
    )
}
