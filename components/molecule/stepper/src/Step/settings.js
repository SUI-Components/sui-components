import {BASE_CLASS} from '../settings.js'

export const BASE_CLASS_STEP = `${BASE_CLASS}Step`

export const getIcon = ({
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
  if (visited && !current) {
    return visitedIcon || visitedIconContext || step
  } else if (current && !visited) {
    return currentIcon || currentIconContext || step
  }
  return icon || iconContext || step
}
