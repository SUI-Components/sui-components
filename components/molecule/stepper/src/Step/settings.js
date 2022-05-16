import {BASE_CLASS, DESIGN} from '../settings.js'

export const BASE_CLASS_STEP = `${BASE_CLASS}Step`

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
  else if (design === DESIGN.BASIC) return label
  else if (design === DESIGN.COMPRESSED && current)
    return (
      <>
        {`${step}/${steps}:`} {label}
      </>
    )
}
