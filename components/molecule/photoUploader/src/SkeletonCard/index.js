import PropTypes from 'prop-types'

import AtomIcon, {ATOM_ICON_SIZES} from '@s-ui/react-atom-icon'

import {SKELETON_CLASS_NAME} from './config.js'

const SkeletonCard = ({icon, inputId, text}) => {
  return (
    <li className={SKELETON_CLASS_NAME}>
      <button className={`${SKELETON_CLASS_NAME}Button`} type="button">
        <div className={`${SKELETON_CLASS_NAME}-icon`} aria-hidden>
          <AtomIcon size={ATOM_ICON_SIZES.medium}>{icon}</AtomIcon>
        </div>
        <label className={`${SKELETON_CLASS_NAME}-text`} htmlFor={inputId} onClick={ev => ev.preventDefault()}>
          {text}
        </label>
      </button>
    </li>
  )
}

SkeletonCard.displayName = 'SkeletonCard'

SkeletonCard.propTypes = {
  icon: PropTypes.node.isRequired,
  inputId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default SkeletonCard
