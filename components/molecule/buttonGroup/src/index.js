/* eslint-disable react/prop-types, no-console */

import React from 'react'

const BASE_CLASS = 'sui-MoleculeButtonGroup'

const MoleculeButtonGroup = ({children, ...props}) => {
  const numChildren = children.length
  const extendedChildren = React.Children.map(children, (child, index) => {
    const groupPosition = (() => {
      if (index === 0) return 'first'
      if (index === numChildren - 1) return 'last'
      return 'middle'
    })()
    return React.cloneElement(child, {groupPosition, ...props})
  })
  return <div className={BASE_CLASS}>{extendedChildren}</div>
}

MoleculeButtonGroup.displayName = 'MoleculeButtonGroup'

export default MoleculeButtonGroup
