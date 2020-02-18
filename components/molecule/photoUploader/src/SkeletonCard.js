import React from 'react'
import PropTypes from 'prop-types'
import SUIContext from '@s-ui/react-context'
import AtomIcon, {ATOM_ICON_SIZES} from '@s-ui/react-atom-icon'

import {BASE_CLASS_NAME} from './config'
const SKELETON_CLASS_NAME = `${BASE_CLASS_NAME}-skeleton`

const SkeletonCard = ({icon, text}) => {
  return (
    <li className={SKELETON_CLASS_NAME}>
      <div className={`${SKELETON_CLASS_NAME}Icon`}>
        <AtomIcon size={ATOM_ICON_SIZES.medium}>{icon()}</AtomIcon>
      </div>
      <div className={`${SKELETON_CLASS_NAME}Text`}>{text}</div>
    </li>
  )
}

SkeletonCard.displayName = 'SkeletonCard'

SkeletonCard.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired
}

export default SUIContext.wrapper(SkeletonCard, 'SkeletonCard')
