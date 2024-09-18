import PropTypes from 'prop-types'
import AtomButton, {atomButtonDesigns, atomButtonShapes, atomButtonSizes} from '@s-ui/react-atom-button'
import {BASE_CLASS} from '../config.js'

const NO_OP = () => {}

const SelectIcon = ({iconArrowDown: IconArrowDown, removeButtonOptions}) => {
  if (!removeButtonOptions) return <IconArrowDown />

  const {
    design = atomButtonDesigns.FLAT,
    isShown = false,
    negative = false,
    onClick = NO_OP,
    rightIcon: RightIcon,
    shape = atomButtonShapes.CIRCULAR,
    size = atomButtonSizes.MEDIUM
  } = removeButtonOptions

  const handleOnButtonClick = evt => {
    evt.stopPropagation()
    onClick()
  }

  return (
    <div className={`${BASE_CLASS}-selectIcon--withRemoveOption`}>
      <AtomButton
        design={isShown ? design : atomButtonDesigns.LINK}
        shape={shape}
        size={size}
        negative={negative}
        rightIcon={isShown ? <RightIcon /> : <IconArrowDown />}
        onClick={isShown ? handleOnButtonClick : NO_OP}
      />
    </div>
  )
}

SelectIcon.propTypes = {
  iconArrowDown: PropTypes.elementType.isRequired,
  removeButtonOptions: PropTypes.shape({
    design: PropTypes.string,
    isShown: PropTypes.bool,
    negative: PropTypes.bool,
    onClick: PropTypes.func,
    rightIcon: PropTypes.elementType.isRequired,
    shape: PropTypes.string,
    size: PropTypes.string
  })
}
export default SelectIcon
