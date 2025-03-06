import {MaterialDesignIcon} from '@s-ui/documentation-library'

export const BASE_CLASS_DEMO = `DemoAtomSwitch`
export const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

export const flexCenteredStyle = {
  display: 'flex',
  justifyContent: 'center',
  wrap: 'nowrap',
  alignItems: 'center',
  alignContent: 'center'
}

export const icons = {
  left: <MaterialDesignIcon aria-label="dark" icon="MdModeNight" style={{color: 'currentColor'}} />,
  right: <MaterialDesignIcon aria-label="light" icon="MdOutlineWbSunny" style={{color: 'currentColor'}} />
}
