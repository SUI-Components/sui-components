import {AntDesignIcon} from '@s-ui/documentation-library'
import AtomIcon from '@s-ui/react-atom-icon'

const IconClose = ({...props}) => (
  <AtomIcon size="xs" {...props}>
    <AntDesignIcon icon="AiFillCloseCircle" style={{color: 'currentColor'}} />
  </AtomIcon>
)

IconClose.displayName = 'IconArrowDown'
IconClose.propTypes = {}

export default IconClose
