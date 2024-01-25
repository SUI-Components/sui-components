import cx from 'classnames'
import PropTypes from 'prop-types'

import Injector from '@s-ui/react-primitive-injector'

import AvatarFallbackIcon from '../AvatarFallbackIcon/index.js'
import {BASE_CLASS_NAME as FALLBACK_ICON_CLASS_NAME} from '../AvatarFallbackIcon/settings.js'
import AvatarFallbackName from '../AvatarFallbackName/index.js'

const MoleculeAvatarFallback = ({name, icon = <AvatarFallbackIcon />, className: classNameProp, ...others}) => {
  const className = cx(classNameProp, FALLBACK_ICON_CLASS_NAME)

  const [Component, providedProps] = name
    ? [AvatarFallbackName, {name, ...others}]
    : [props => <Injector {...props}>{icon}</Injector>, {...others, className, role: 'img'}]

  return <Component {...providedProps} />
}

MoleculeAvatarFallback.displayName = 'MoleculeAvatarFallback'
MoleculeAvatarFallback.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.element
}

export default MoleculeAvatarFallback
