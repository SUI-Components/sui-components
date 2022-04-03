import AtomIcon from '@s-ui/react-atom-icon'
import Element from '@s-ui/react-atom-polymorphic-element'
import {AntDesignIcon} from '@s-ui/documentation-library'

const Icon = ({icon, as}) => (
  <AtomIcon>
    <Element as={as} icon={icon} style={{fill: 'currentColor'}} />
  </AtomIcon>
)

export const visitedIcon = (
  <Icon icon={'AiOutlineStepForward'} as={AntDesignIcon} />
)
export const currentIcon = (
  <Icon icon={'AiOutlinePlayCircle'} as={AntDesignIcon} />
)
export const defaultIcon = <Icon icon={'AiOutlineStar'} as={AntDesignIcon} />
