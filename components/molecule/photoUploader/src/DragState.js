import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AtomIcon, {ATOM_ICON_SIZES} from '@s-ui/react-atom-icon'

import {BASE_CLASS_NAME} from './config'
const DRAG_STATE_CLASS_NAME = `${BASE_CLASS_NAME}-dragState`
const DEFATUL_DRAG_STATE_STATUS = 'accepted'

const DragState = ({icon, status = DEFATUL_DRAG_STATE_STATUS, text}) => {
  const dropzoneClassName = cx(DRAG_STATE_CLASS_NAME, {
    [`${DRAG_STATE_CLASS_NAME}--accepted`]: status === 'accepted',
    [`${DRAG_STATE_CLASS_NAME}--rejected`]: status === 'rejected'
  })

  return (
    <div className={dropzoneClassName}>
      <AtomIcon size={ATOM_ICON_SIZES.extraLarge}>{icon()}</AtomIcon>
      <div className={`${DRAG_STATE_CLASS_NAME}-textState`}>{text}</div>
    </div>
  )
}

DragState.displayName = 'DragState'

DragState.propTypes = {
  icon: PropTypes.node.isRequired,
  status: PropTypes.string,
  text: PropTypes.string.isRequired
}

export default DragState
