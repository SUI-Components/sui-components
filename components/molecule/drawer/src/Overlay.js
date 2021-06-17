import PropTypes from 'prop-types'
import {OVERLAY_ELEMENT_TYPE} from './settings'

const DrawerOverlay = ({onClick}) => {
  return (
    <OVERLAY_ELEMENT_TYPE
      className="react-MoleculeDrawer-overlay"
      onClick={event => {
        typeof onClick === 'function' && onClick(event)
      }}
    />
  )
}

DrawerOverlay.propTypes = {
  onClick: PropTypes.func
}
DrawerOverlay.displayName = 'MoleculeDrawerOverlay'

export default DrawerOverlay
