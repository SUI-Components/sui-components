import {AntDesignIcon} from '@s-ui/documentation-library'
import AtomIcon from '@s-ui/react-atom-icon'

import {checkboxSizes, checkboxStatus} from '../src/index.js'

export const BASE_CLASS_DEMO = `DemoAtomCheckbox`
export const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

export const CHECKBOX_STATUS = ['', ...Object.values(checkboxStatus)]
export const CHECKBOX_SIZE = [...Object.values(checkboxSizes)]

export const ICONS = {
  aiOutlineCheck: (
    <AtomIcon>
      <AntDesignIcon icon="AiOutlineCheck" style={{color: 'currentColor'}} />
    </AtomIcon>
  ),
  aiOutlineClose: (
    <AtomIcon>
      <AntDesignIcon icon="AiOutlineClose" style={{color: 'currentColor'}} />
    </AtomIcon>
  ),
  aiOutlineLine: (
    <AtomIcon>
      <AntDesignIcon icon="AiOutlineLine" style={{color: 'currentColor'}} />
    </AtomIcon>
  ),
  aiOutlineInfo: (
    <AtomIcon>
      <AntDesignIcon icon="AiOutlineInfo" style={{color: 'currentColor'}} />
    </AtomIcon>
  ),
  aiOutlinePause: (
    <AtomIcon>
      <AntDesignIcon icon="AiOutlinePause" style={{color: 'currentColor'}} />
    </AtomIcon>
  ),
  aiOutlinePlus: (
    <AtomIcon>
      <AntDesignIcon icon="AiOutlinePlus" style={{color: 'currentColor'}} />
    </AtomIcon>
  )
}

export const flexCenteredStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  wrap: 'nowrap',
  alignItems: 'center',
  alignContent: 'center'
}
