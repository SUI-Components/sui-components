import PropTypes from 'prop-types'

const AtomLoading = ({role = 'status', ...props}) => {
  return <div role="status" {...props} className="sui-AtomLoading" />
}
AtomLoading.propTypes = {
  role: PropTypes.string
}
AtomLoading.displayName = 'AtomLoading'

export default AtomLoading
