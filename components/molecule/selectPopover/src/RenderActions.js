import PropTypes from 'prop-types'

import PrimitiveInjector from '@s-ui/react-primitive-injector'

import {BASE_CLASS} from './config.js'
import RenderActionsDefault from './RenderActionsDefault.js'

const RenderActions = ({
  onCustomAction,
  customButtonText,
  customButtonOptions,
  cancelButtonText,
  onCancel,
  cancelButtonOptions,
  onAccept,
  acceptButtonOptions,
  acceptButtonText,
  children = <RenderActionsDefault />
}) => (
  <div className={`${BASE_CLASS}-popoverActionBar`}>
    <PrimitiveInjector
      {...{
        onCustomAction,
        customButtonText,
        customButtonOptions,
        cancelButtonText,
        onCancel,
        cancelButtonOptions,
        onAccept,
        acceptButtonOptions,
        acceptButtonText
      }}
    >
      {children}
    </PrimitiveInjector>
  </div>
)

RenderActions.propTypes = {
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
  acceptButtonText: PropTypes.string,
  children: PropTypes.node
}

export default RenderActions
