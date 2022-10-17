import cx from 'classnames'
import PropTypes from 'prop-types'

import useConvertStringToHex from '../useConvertStringToHex.js'
import {BASE_CLASS_NAME} from './settings.js'

const MoleculeAvatarFallbackName = ({
  name: nameProp,
  size,
  className: classNameProp,
  fallbackColor: backgroundColorProp,
  ...others
}) => {
  const className = cx(
    BASE_CLASS_NAME,
    classNameProp,
    `${BASE_CLASS_NAME}--${size}`
  )
  const [firstName, lastName] = nameProp.split(' ')
  const name =
    firstName && lastName
      ? `${firstName.charAt(0)}${lastName.charAt(0)}`
      : firstName.charAt(0)

  const stringToHexBackgroundColor = useConvertStringToHex(nameProp)
  const backgroundColor = backgroundColorProp || stringToHexBackgroundColor

  return (
    <div
      className={className}
      aria-label={nameProp}
      style={{backgroundColor}}
      {...others}
    >
      {name}
    </div>
  )
}

MoleculeAvatarFallbackName.displayName = 'MoleculeAvatarFallbackName'
MoleculeAvatarFallbackName.propTypes = {
  className: PropTypes.string,
  fallbackColor: PropTypes.string,
  name: PropTypes.string,
  src: PropTypes.string,
  size: PropTypes.string
}

export default MoleculeAvatarFallbackName
