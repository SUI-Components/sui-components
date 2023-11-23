import PropTypes from 'prop-types'

import {ICON_PLACEMENT_CLASSNAME, ICON_PLACEMENTS} from './settings.js'

const AtomTagActionableIcon = ({icon, iconPlacement}) =>
  icon ? <span className={ICON_PLACEMENT_CLASSNAME[iconPlacement]}>{icon}</span> : null

AtomTagActionableIcon.displayName = 'AtomTagActionableIcon'

AtomTagActionableIcon.propTypes = {
  icon: PropTypes.node,
  iconPlacement: PropTypes.oneOf(Object.values(ICON_PLACEMENTS))
}

export default AtomTagActionableIcon
