import cx from 'classnames'
import PropTypes from 'prop-types'

const MoleculeAvatarFallbackName = ({
  name: nameProp,
  size,
  className: classNameProp,
  ...others
}) => {
  const baseClassName = 'sui-MoleculeAvatarFallbackName'
  const className = cx(
    baseClassName,
    classNameProp,
    `${baseClassName}--${size}`
  )
  const [firstName, lastName] = nameProp.split(' ')
  const name =
    firstName && lastName
      ? `${firstName.charAt(0)}${lastName.charAt(0)}`
      : firstName.charAt(0)

  return (
    <div className={className} aria-label={nameProp} {...others}>
      {name}
    </div>
  )
}

MoleculeAvatarFallbackName.displayName = 'MoleculeAvatarFallbackName'
MoleculeAvatarFallbackName.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  src: PropTypes.string,
  size: PropTypes.string
}

export default MoleculeAvatarFallbackName
