import FileAction from './FileAction.js'
import {
  download as downloadIcon,
  recover as recoverIcon,
  remove as removeIcon,
  show as showIcon
} from './Icons'

import {download} from '../../../settings.js'

export const FILE_ACTIONS = {
  Download: ({onClick}) => <FileAction onClick={onClick}>{downloadIcon}</FileAction>,
  Recover: () => <FileAction>{recoverIcon}</FileAction>,
  Remove: () => <FileAction>{removeIcon}</FileAction>,
  Show: () => <FileAction>{showIcon}</FileAction>
}
