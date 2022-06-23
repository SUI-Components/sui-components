import PropTypes from 'prop-types'

import AtomIcon from '@s-ui/react-atom-icon'
import Element from '@s-ui/react-primitive-polymorphic-element'

const Icon = ({as, icon}) => (
  <AtomIcon>
    <Element as={as} icon={icon} style={{fill: 'currentColor'}} />
  </AtomIcon>
)

Icon.propTypes = {
  as: PropTypes.element,
  icon: PropTypes.string
}

Icon.displayName = 'Icon'

export default Icon
