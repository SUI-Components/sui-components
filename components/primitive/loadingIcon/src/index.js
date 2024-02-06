import PropTypes from 'prop-types'

const PrimitiveLoadingIcon = ({role = 'status', ...props}) => {
  return <div role={role} {...props} className="sui-PrimitiveLoadingIcon" />
}
PrimitiveLoadingIcon.propTypes = {
  role: PropTypes.string
}
PrimitiveLoadingIcon.displayName = 'PrimitiveLoadingIcon'

export default PrimitiveLoadingIcon
