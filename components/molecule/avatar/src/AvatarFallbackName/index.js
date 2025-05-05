import cx from 'classnames'
import PropTypes from 'prop-types'

import useBackgroundColor from '../useBackgroundColor.js'
import {BASE_CLASS_NAME} from './settings.js'

const MoleculeAvatarFallbackName = ({
  name: nameProp,
  size,
  className: classNameProp,
  backgroundColor: backgroundColorProp,
  ...others
}) => {
  const className = cx(BASE_CLASS_NAME, classNameProp, `${BASE_CLASS_NAME}--${size}`)
  const [firstName, lastName] = nameProp.split(' ')
  const name = firstName && lastName ? `${firstName.charAt(0)}${lastName.charAt(0)}` : firstName.charAt(0)

  const backgroundColor = useBackgroundColor({
    name: nameProp,
    backgroundColor: backgroundColorProp
  })

  return (
    <p className={className} aria-hidden="true" aria-label={nameProp} style={{backgroundColor}} {...others}>
      {name}
    </p>
  )
}

MoleculeAvatarFallbackName.displayName = 'MoleculeAvatarFallbackName'
MoleculeAvatarFallbackName.propTypes = {
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  name: PropTypes.string,
  src: PropTypes.string,
  size: PropTypes.string
}

export default MoleculeAvatarFallbackName
