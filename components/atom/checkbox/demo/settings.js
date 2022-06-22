import {AntDesignIcon, BootstrapIcon} from '@s-ui/documentation-library'
import AtomIcon from '@s-ui/react-atom-icon'

import {atomCheckboxSizes, atomCheckboxStatus} from '../src/index.js'

export const BASE_CLASS_DEMO = `DemoAtomCheckbox`
export const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

export const CHECKBOX_STATUS = ['', ...Object.values(atomCheckboxStatus)]
export const CHECKBOX_SIZE = [...Object.values(atomCheckboxSizes)]

export const ICONS = {
  aiOutlineCheck: ({as, size}) => (
    <AtomIcon as={as} size={size}>
      <AntDesignIcon icon="AiOutlineCheck" style={{color: 'currentColor'}} />
    </AtomIcon>
  ),
  aiOutlineClose: ({as, size}) => (
    <AtomIcon as={as} size={size}>
      <AntDesignIcon icon="AiOutlineClose" style={{color: 'currentColor'}} />
    </AtomIcon>
  ),
  aiOutlineLine: ({as, size}) => (
    <AtomIcon as={as} size={size}>
      <AntDesignIcon icon="AiOutlineLine" style={{color: 'currentColor'}} />
    </AtomIcon>
  ),
  aiOutlineInfo: ({as, size}) => (
    <AtomIcon as={as} size={size}>
      <AntDesignIcon icon="AiOutlineInfo" style={{color: 'currentColor'}} />
    </AtomIcon>
  ),
  aiOutlinePause: ({as, size}) => (
    <AtomIcon as={as} size={size}>
      <AntDesignIcon icon="AiOutlinePause" style={{color: 'currentColor'}} />
    </AtomIcon>
  ),
  aiOutlinePlus: ({as, size}) => (
    <AtomIcon as={as} size={size}>
      <AntDesignIcon icon="AiOutlinePlus" style={{color: 'currentColor'}} />
    </AtomIcon>
  ),
  bsSquare: ({as, size}) => (
    <AtomIcon as={as} size={size}>
      <BootstrapIcon icon="BsSquare" style={{color: 'currentColor'}} />
    </AtomIcon>
  ),
  bsDot: ({as, size}) => (
    <AtomIcon as={as} size={size}>
      <BootstrapIcon icon="BsDot" style={{color: 'currentColor'}} />
    </AtomIcon>
  ),
  bsFillEmojiSmileFill: ({as, size}) => (
    <AtomIcon as={as} size={size}>
      <BootstrapIcon
        icon="BsFillEmojiSmileFill"
        style={{color: 'currentColor'}}
      />
    </AtomIcon>
  ),
  bsFillEmojiNeutralFill: ({as, size}) => (
    <AtomIcon as={as} size={size}>
      <BootstrapIcon
        icon="BsFillEmojiNeutralFill"
        style={{color: 'currentColor'}}
      />
    </AtomIcon>
  ),
  bsFillEmojiFrownFill: ({as, size}) => (
    <AtomIcon as={as} size={size}>
      <BootstrapIcon
        icon="BsFillEmojiFrownFill"
        style={{color: 'currentColor'}}
      />
    </AtomIcon>
  )
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
export const propsFromStatus = (status = PROPS_STATUS.UNCHECKED) =>
  PROPS_STATUS[status]

export const flexCenteredStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  wrap: 'nowrap',
  alignItems: 'center',
  alignContent: 'center'
}
