/* eslint-disable react/prop-types, no-console */

import React from 'react'
import cx from 'classnames'
import {atomButtonGroupPositions} from '@schibstedspain/sui-atom-button'

const BASE_CLASS = 'sui-MoleculeButtonGroup'

const MoleculeButtonGroup = ({children, fullWidth, ...props}) => {
  const numChildren = children.length
  const extendedChildren = React.Children.map(children, (child, index) => {
    const groupPosition = (() => {
      if (index === 0) return atomButtonGroupPositions.FIRST
      if (index === numChildren - 1) return atomButtonGroupPositions.LAST
      return atomButtonGroupPositions.MIDDLE
    })()
    return React.cloneElement(child, {...props, groupPosition, fullWidth})
  })
  return (
    <div className={cx(BASE_CLASS, fullWidth && `${BASE_CLASS}--fullWidth`)}>
      {extendedChildren}
    </div>
  )
}

MoleculeButtonGroup.displayName = 'MoleculeButtonGroup'

export default MoleculeButtonGroup
