import {AntDesignIcon} from '@s-ui/documentation-library'
import AtomIcon, {ATOM_ICON_SIZES} from '@s-ui/react-atom-icon'

export const BASE_CLASS_DEMO = `DemoMoleculeBadgeCounter`
export const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

export const infoIcon = (
  <AtomIcon size={ATOM_ICON_SIZES.small}>
    <AntDesignIcon icon="AiOutlineInfoCircle" style={{color: 'currentColor'}} />
  </AtomIcon>
)
