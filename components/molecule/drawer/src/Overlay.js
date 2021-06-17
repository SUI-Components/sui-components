import PropTypes from 'prop-types'

const DrawerOverlay = ({onClick}) => {
  return (
    <div
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
