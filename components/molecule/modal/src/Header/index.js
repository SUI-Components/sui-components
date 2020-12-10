import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const MoleculeModalHeader = ({close, isFloating, children}) => {
  const baseClassName = 'ma-MoleculeModalHeader'
  const className = cx(baseClassName, {
    [`${baseClassName}--filled`]: !!children,
    [`${baseClassName}--floating`]: !children && isFloating,
    [`${baseClassName}--empty`]: !children && !isFloating
  })

  return (
    <header className={className}>
      {children}
      {React.isValidElement(close) &&
        React.cloneElement(close, {
          isFloating
        })}
    </header>
  )
}

MoleculeModalHeader.propTypes = {
  close: PropTypes.element,
  isFloating: PropTypes.bool,
  children: PropTypes.node
}

export default MoleculeModalHeader
