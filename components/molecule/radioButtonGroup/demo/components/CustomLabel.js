import AtomLabel from '@s-ui/react-atom-label'
import PropTypes from 'prop-types'

const CustomLabel = ({text, type, name, onClickLabel}) => (
  <>
    <AtomLabel
      name={name}
      text={text}
      inline="left"
      onClick={onClickLabel}
      type={type}
    />
    <span>I am out of the label</span>
  </>
)

CustomLabel.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  onClickLabel: PropTypes.func
}

export default CustomLabel
