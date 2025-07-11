import PropTypes from 'prop-types'

const MoleculeModalFooter = ({className, ...others}) => {
  const baseClassName = 'sui-MoleculeModalFooter'

  return <footer className={baseClassName} {...others} />
}

MoleculeModalFooter.propTypes = {
  className: PropTypes.string
}

export default MoleculeModalFooter
