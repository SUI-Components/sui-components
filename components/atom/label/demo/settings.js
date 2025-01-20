import {AntDesignIcon} from '@s-ui/documentation-library'
import AtomIcon from '@s-ui/react-atom-icon'

export const BASE_CLASS_DEMO = `DemoAtomLabel`
export const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

export const flexCenteredStyle = {
  display: 'flex',
  justifyContent: 'center',
  wrap: 'nowrap',
  alignItems: 'center',
  alignContent: 'center'
}

export const CheckedIcon = () => (
  <AtomIcon>
    <AntDesignIcon icon="AiOutlineCheck" style={{color: 'currentColor'}} />
  </AtomIcon>
)

export const IndeterminateIcon = () => (
  <AtomIcon>
    <AntDesignIcon icon="AiOutlineLine" style={{color: 'currentColor'}} />
  </AtomIcon>
)
