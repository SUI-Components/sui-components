import {AntDesignIcon} from '@s-ui/documentation-library'
import AtomIcon, {ATOM_ICON_SIZES} from '@s-ui/react-atom-icon'

export const icon = (
  <AtomIcon size={ATOM_ICON_SIZES.small}>
    <AntDesignIcon icon="AiOutlineCoffee" style={{color: 'currentColor'}} />
  </AtomIcon>
)

export const checkIcon = (
  <AtomIcon size={ATOM_ICON_SIZES.small}>
    <AntDesignIcon icon="AiOutlineCheck" style={{color: 'currentColor'}} />
  </AtomIcon>
)

export const calendarIcon = (
  <AtomIcon size={ATOM_ICON_SIZES.small}>
    <AntDesignIcon icon="AiOutlineCalendar" style={{color: 'currentColor'}} />
  </AtomIcon>
)

export const eyeIcon = (
  <AtomIcon size={ATOM_ICON_SIZES.small}>
    <AntDesignIcon icon="AiOutlineEye" style={{color: 'currentColor'}} />
  </AtomIcon>
)

export const closeIcon = (
  <AtomIcon size={ATOM_ICON_SIZES.small}>
    <AntDesignIcon icon="AiOutlineCloseCircle" style={{color: 'currentColor'}} />
  </AtomIcon>
)

export const handleClose = (_event, data) => {
  window.alert(`Click on close icon for tag with data: ${JSON.stringify(data)}`)
}

export const BASE_CLASS_DEMO = `DemoAtomTag`
export const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

export const flexCenteredStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  wrap: 'nowrap',
  alignItems: 'center',
  alignContent: 'center'
}
