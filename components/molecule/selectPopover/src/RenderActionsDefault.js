import Button, {atomButtonDesigns} from '@s-ui/react-atom-button'
import PropTypes from 'prop-types'

const RenderActionsDefault = ({
  onCustomAction,
  customButtonText,
  customButtonOptions,
  cancelButtonText,
  onCancel,
  cancelButtonOptions,
  onAccept,
  acceptButtonOptions,
  acceptButtonText
}) => (
  <>
    {customButtonText ? (
      <Button onClick={onCustomAction} {...customButtonOptions}>
        {customButtonText}
      </Button>
    ) : null}
    {cancelButtonText ? (
      <Button
        onClick={onCancel}
        design={atomButtonDesigns.FLAT}
        {...cancelButtonOptions}
      >
        {cancelButtonText}
      </Button>
    ) : null}
    {acceptButtonText ? (
      <Button onClick={onAccept} {...acceptButtonOptions}>
        {acceptButtonText}
      </Button>
    ) : null}
  </>
)

RenderActionsDefault.propTypes = {
  onCustomAction: PropTypes.func,
  customButtonText: PropTypes.string,
  customButtonOptions: PropTypes.shape({
    design: PropTypes.string,
    negative: PropTypes.bool
  }),
  cancelButtonText: PropTypes.string,
  onCancel: PropTypes.func,
  cancelButtonOptions: PropTypes.shape({
    design: PropTypes.string,
    negative: PropTypes.bool
  }),
  onAccept: PropTypes.func,
  acceptButtonOptions: PropTypes.shape({
    design: PropTypes.string,
    negative: PropTypes.bool
  }),
  acceptButtonText: PropTypes.string
}

export default RenderActionsDefault
