import PropTypes from 'prop-types'

import Icon, {atomIconSizes, atomIconColors} from '@s-ui/react-atom-icon'

import {CLASS_FILE_ACTION} from './settings.js'

const FileAction = ({
  children,
  size = atomIconSizes.medium,
  color = atomIconColors.primary,
  ...props
}) => {
  return (
    <i className={CLASS_FILE_ACTION}>
      <Icon size={size} color={color} {...props}>
        {children}
      </Icon>
    </i>
  )
}

FileAction.dosplayName = 'FileAction'
FileAction.propTypes = {
  children: PropTypes.node
}

export default FileAction
