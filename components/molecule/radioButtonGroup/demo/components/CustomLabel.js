import PropTypes from 'prop-types'

import AtomLabel from '@s-ui/react-atom-label'
import AtomTooltip from '@s-ui/react-atom-tooltip'

const CustomLabel = ({text, type, name, onClickLabel, ...props}) => (
  <>
    <AtomLabel
      name={name}
      text={text}
      inline="left"
      onClick={onClickLabel}
      type={type}
      {...props}
    />
    <AtomTooltip content={name}>
      <span>I am out of the label</span>
    </AtomTooltip>
  </>
)

CustomLabel.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  onClickLabel: PropTypes.func
}

export default CustomLabel
