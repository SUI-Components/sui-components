import {DevIcon} from '@s-ui/documentation-library'

export const icon = <DevIcon icon="DiGithubBadge" />

export const flexCenteredStyle = {
  display: 'flex',
  justifyContent: 'center',
  wrap: 'nowrap',
  alignItems: 'center',
  alignContent: 'center'
}
export const handleSubmit = event => {
  event.preventDefault()
  alert('Form submitted!')
}

export const BASE_CLASS_DEMO = `DemoAtomActionButton`
export const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`
