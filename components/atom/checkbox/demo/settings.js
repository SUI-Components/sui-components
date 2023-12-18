import PropTypes from 'prop-types'

import {AntDesignIcon, BootstrapIcon} from '@s-ui/documentation-library'
import AtomIcon from '@s-ui/react-atom-icon'

import {CHECKBOX_SIZES} from '../src/config.js'
import {atomCheckboxSizes, atomCheckboxStatus} from '../src/index.js'

export const BASE_CLASS_DEMO = `DemoAtomCheckbox`
export const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

export const CHECKBOX_STATUS = ['', ...Object.values(atomCheckboxStatus)]
export const CHECKBOX_SIZE = [...Object.values(atomCheckboxSizes)]

const AiOutlineCheck = ({as, size}) => (
  <AtomIcon as={as} size={size}>
    <AntDesignIcon icon="AiOutlineCheck" style={{color: 'currentColor'}} />
  </AtomIcon>
)
AiOutlineCheck.propTypes = {
  as: PropTypes.element,
  size: PropTypes.oneOf(Object.values(CHECKBOX_SIZES))
}
const AiOutlineClose = ({as, size}) => (
  <AtomIcon as={as} size={size}>
    <AntDesignIcon icon="AiOutlineClose" style={{color: 'currentColor'}} />
  </AtomIcon>
)
AiOutlineClose.propTypes = {
  as: PropTypes.element,
  size: PropTypes.oneOf(Object.values(CHECKBOX_SIZES))
}

const EmptyIcon = ({as, size}) => <AtomIcon as={as} size={size}></AtomIcon>
EmptyIcon.propTypes = {
  as: PropTypes.element,
  size: PropTypes.oneOf(Object.values(CHECKBOX_SIZES))
}
const AiOutlineLine = ({as, size}) => (
  <AtomIcon as={as} size={size}>
    <AntDesignIcon icon="AiOutlineLine" style={{color: 'currentColor'}} />
  </AtomIcon>
)
AiOutlineLine.propTypes = {
  as: PropTypes.element,
  size: PropTypes.oneOf(Object.values(CHECKBOX_SIZES))
}
const AiOutlineInfo = ({as, size}) => (
  <AtomIcon as={as} size={size}>
    <AntDesignIcon icon="AiOutlineInfo" style={{color: 'currentColor'}} />
  </AtomIcon>
)
AiOutlineInfo.propTypes = {
  as: PropTypes.element,
  size: PropTypes.oneOf(Object.values(CHECKBOX_SIZES))
}
const AiOutlinePause = ({as, size}) => (
  <AtomIcon as={as} size={size}>
    <AntDesignIcon icon="AiOutlinePause" style={{color: 'currentColor'}} />
  </AtomIcon>
)
AiOutlinePause.propTypes = {
  as: PropTypes.element,
  size: PropTypes.oneOf(Object.values(CHECKBOX_SIZES))
}
const AiOutlinePlus = ({as, size}) => (
  <AtomIcon as={as} size={size}>
    <AntDesignIcon icon="AiOutlinePlus" style={{color: 'currentColor'}} />
  </AtomIcon>
)
AiOutlinePlus.propTypes = {
  as: PropTypes.element,
  size: PropTypes.oneOf(Object.values(CHECKBOX_SIZES))
}
const BsSquare = ({as, size}) => (
  <AtomIcon as={as} size={size}>
    <BootstrapIcon icon="BsSquare" style={{color: 'currentColor'}} />
  </AtomIcon>
)
BsSquare.propTypes = {
  as: PropTypes.element,
  size: PropTypes.oneOf(Object.values(CHECKBOX_SIZES))
}
const BsDot = ({as, size}) => (
  <AtomIcon as={as} size={size}>
    <BootstrapIcon icon="BsDot" style={{color: 'currentColor'}} />
  </AtomIcon>
)
BsDot.propTypes = {
  as: PropTypes.element,
  size: PropTypes.oneOf(Object.values(CHECKBOX_SIZES))
}
const BsFillEmojiSmileFill = ({as, size}) => (
  <AtomIcon as={as} size={size}>
    <BootstrapIcon icon="BsFillEmojiSmileFill" style={{color: 'currentColor'}} />
  </AtomIcon>
)
BsFillEmojiSmileFill.propTypes = {
  as: PropTypes.element,
  size: PropTypes.oneOf(Object.values(CHECKBOX_SIZES))
}
const BsFillEmojiNeutralFill = ({as, size}) => (
  <AtomIcon as={as} size={size}>
    <BootstrapIcon icon="BsFillEmojiNeutralFill" style={{color: 'currentColor'}} />
  </AtomIcon>
)
BsFillEmojiNeutralFill.propTypes = {
  as: PropTypes.element,
  size: PropTypes.oneOf(Object.values(CHECKBOX_SIZES))
}
const BsFillEmojiFrownFill = ({as, size}) => (
  <AtomIcon as={as} size={size}>
    <BootstrapIcon icon="BsFillEmojiFrownFill" style={{color: 'currentColor'}} />
  </AtomIcon>
)
BsFillEmojiFrownFill.propTypes = {
  as: PropTypes.element,
  size: PropTypes.oneOf(Object.values(CHECKBOX_SIZES))
}

export const ICONS = {
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineLine,
  AiOutlineInfo,
  AiOutlinePause,
  AiOutlinePlus,
  BsSquare,
  EmptyIcon,
  BsDot,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
}

export const PROPS_STATUS = {
  UNCHECKED: {
    checked: false,
    indeterminate: false
  },
  INDETERMINATE: {
    checked: false,
    indeterminate: true
  },
  CHECKED: {
    checked: true,
    indeterminate: false
  }
}
export const propsFromStatus = (status = PROPS_STATUS.UNCHECKED) => PROPS_STATUS[status]

export const flexCenteredStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  wrap: 'nowrap',
  alignItems: 'center',
  alignContent: 'center'
}
