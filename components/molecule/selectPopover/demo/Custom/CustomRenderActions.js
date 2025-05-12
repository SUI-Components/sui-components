import PropTypes from 'prop-types'

const CustomRenderActions = ({cancelButtonText, onCancel, onAccept, acceptButtonText}) => {
  return (
    <>
      <button onClick={onAccept}>{acceptButtonText}</button>
      <button onClick={onCancel}>{cancelButtonText}</button>
      this is awesome!
    </>
  )
}

CustomRenderActions.propTypes = {
  cancelButtonText: PropTypes.string,
  onCancel: PropTypes.func,
  onAccept: PropTypes.func,
  acceptButtonText: PropTypes.string
}

CustomRenderActions.displayName = 'CustomRenderActions'

export default CustomRenderActions
