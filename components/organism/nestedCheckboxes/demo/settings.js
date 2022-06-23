import {AntDesignIcon} from '@s-ui/documentation-library'
import AtomIcon from '@s-ui/react-atom-icon/src/index.js'

const BASE_CLASS_DEMO = `DemoMoleculeDrawer`
export const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const getIcon = icon => props =>
  (
    <AtomIcon {...props}>
      <AntDesignIcon icon={icon} style={{fill: 'currentColor'}} />
    </AtomIcon>
  )

export const ICONS = {
  IconCheck: getIcon('AiOutlineCheck'),
  IconHalfCheck: getIcon('AiOutlineMinus'),
  IconArrowDown: getIcon('AiOutlineDown'),
  IconArrowUp: getIcon('AiOutlineUp')
}

export const demoExample = [
  {id: 'nested-01', label: 'Nested 1', checked: true},
  {id: 'nested-02', label: 'Nested 2', checked: false},
  {id: 'nested-03', label: 'Nested 3', checked: true},
  {id: 'nested-04', label: 'Nested 4', checked: true},
  {id: 'nested-05', label: 'Nested 5', checked: true}
]
