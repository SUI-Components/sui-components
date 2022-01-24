import PropTypes from 'prop-types'

const ErrorImage = ({className, icon: Icon, text}) => (
  <div className={className}>
    {Icon}
    {Boolean(text) && <p>{text}</p>}
  </div>
)

ErrorImage.displayName = 'ErrorImage'

ErrorImage.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  text: PropTypes.node
}

export default ErrorImage
