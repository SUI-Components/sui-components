import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-MoleculeButtonGroup'

const getGroupPosition = (groupPositions, numChildren, index) => {
  if (index === 0) return groupPositions.FIRST
  if (index === numChildren - 1) return groupPositions.LAST
  return groupPositions.MIDDLE
}

const MoleculeButtonGroup = ({
  children, // eslint-disable-line react/prop-types
  fullWidth,
  groupPositions,
  ...props
}) => {
  const numChildren = children.length
  const getGroupPositionByIndex = getGroupPosition.bind(
    null,
    groupPositions,
    numChildren
  )
  const extendedChildren = React.Children.map(children, (child, index) => {
    const groupPosition = getGroupPositionByIndex(index)
    return React.cloneElement(child, {...props, groupPosition, fullWidth})
  })
  return (
    <div className={cx(BASE_CLASS, fullWidth && `${BASE_CLASS}--fullWidth`)}>
      {extendedChildren}
    </div>
  )
}

MoleculeButtonGroup.displayName = 'MoleculeButtonGroup'

MoleculeButtonGroup.propTypes = {
  /** If buttons should stretch to fit the width of container */
  fullWidth: PropTypes.bool,

  /** groupPositions constants (FIRST, MIDDLE, LAST) */
  groupPositions: PropTypes.object
}

MoleculeButtonGroup.defaultProps = {
  groupPositions: {
    FIRST: 'first',
    MIDDLE: 'middle',
    LAST: 'last'
  }
}

export default MoleculeButtonGroup
