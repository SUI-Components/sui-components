import {BootstrapIcon} from '@s-ui/documentation-library'
import AtomIcon, {
  ATOM_ICON_COLORS,
  ATOM_ICON_SIZES
} from '@s-ui/react-atom-icon'

const ImageNotFoundIcon = () => {
  return (
    <AtomIcon
      color={ATOM_ICON_COLORS.currentColor}
      size={ATOM_ICON_SIZES.extraLarge}
    >
      <BootstrapIcon icon="BsImageFill" style={{color: 'currentColor'}} />
    </AtomIcon>
  )
}

export default ImageNotFoundIcon
