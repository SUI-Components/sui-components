import {BASE_CLASS} from '../../config'

export const CLASS_STEPS = `${BASE_CLASS}-path`

export const CLASS_BAR = `${CLASS_STEPS}-bar`
export const CLASS_STEP = `${CLASS_STEPS}-step`

export const CLASS_STEP_NUMBER = `${CLASS_STEP}-number`
export const CLASS_STEP_ICON = `${CLASS_STEP}-icon`

export const CLASS_STEP_DESCRIPTION = `${CLASS_STEP}-description`

/* status */
export const CLASS_BAR_ACTIVE = `${CLASS_BAR}--active`
export const CLASS_BAR_VISITED = `${CLASS_BAR}--visited`
export const CLASS_STEP_ACTIVE = `${CLASS_STEP}--active`
export const CLASS_STEP_VISITED = `${CLASS_STEP}--visited`

export const STATUSES = {
  VISITED: 'VISITED',
  NORMAL: 'NORMAL',
  ACTIVE: 'ACTIVE'
}

export const isVisited = status => status === STATUSES.VISITED
export const isActive = status => status === STATUSES.ACTIVE

export const getStatusClass = status => {
  if (isVisited(status)) return [CLASS_STEP_VISITED, CLASS_BAR_VISITED]
  if (isActive(status)) return [CLASS_STEP_ACTIVE, CLASS_BAR_ACTIVE]
  return ['', '']
}
