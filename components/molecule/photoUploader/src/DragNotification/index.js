import PropTypes from 'prop-types'

import AtomIcon, {ATOM_ICON_SIZES} from '@s-ui/react-atom-icon'
import MoleculeNotification, {BRDS_SIZE} from '@s-ui/react-molecule-notification'

import {MOLECULE_NOTIFICATION_TYPE, NOTIFICATION_CLASS_NAME} from './config.js'

const DragNotification = ({icon, onCloseCallback = () => {}, show = false, text}) => {
  return (
    <>
      {show && (
        <div className={NOTIFICATION_CLASS_NAME}>
          <MoleculeNotification
            icon={<AtomIcon size={ATOM_ICON_SIZES.extraLarge}>{icon}</AtomIcon>}
            type={MOLECULE_NOTIFICATION_TYPE}
            show={show}
            autoClose={null}
            roundedCorners={BRDS_SIZE.small}
            onClose={onCloseCallback}
          >
            {text}
          </MoleculeNotification>
        </div>
      )}
    </>
  )
}

DragNotification.displayName = 'DragNotification'

DragNotification.propTypes = {
  icon: PropTypes.node.isRequired,
  onCloseCallback: PropTypes.func,
  show: PropTypes.bool,
  text: PropTypes.string.isRequired
}

export default DragNotification
