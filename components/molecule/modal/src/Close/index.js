import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '@s-ui/react-atom-button'
import Icon from '@s-ui/react-atom-icon'

const MoleculeModalClose = ({icon, isFloating, ...others}) => {
  const baseClassName = 'ma-MoleculeModalClose'
  const className = cx(baseClassName, {
    [`${baseClassName}--floating`]: isFloating
  })

  return (
    <Button className={className} leftIcon={<Icon>{icon}</Icon>} {...others} />
  )
}

MoleculeModalClose.propTypes = {
  ...Button.propTypes,
  'aria-label': PropTypes.string.isRequired,
  isFloating: PropTypes.bool
}

export default MoleculeModalClose
