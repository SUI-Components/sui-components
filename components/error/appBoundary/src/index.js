import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

class ErrorAppBoundary extends Component {
  AlertBasicComponent = null
  state = { errorCount: 0, hasError: false }
  componentDidCatch (errorMessage, errorStack) {
    const { numberOfToleratedErrors, onError, redirectUrlOnUntolerated } = this.props
    const { errorCount } = this.state

    onError({ errorMessage, errorStack })
    this.setState({ errorCount: errorCount + 1 })

    return errorCount >= numberOfToleratedErrors
      ? redirectUrlOnUntolerated && (window.location.href = redirectUrlOnUntolerated)
      : this._loadNotification()
  }

  shouldComponentUpdate (nextProps, nextState) {
    return nextState.errorCount <= nextProps.numberOfToleratedErrors
  }

  _loadNotification () {
    new Promise(resolve => {
      require.ensure([], (require) => {
        resolve(require('@schibstedspain/sui-alert-basic').default)
      }, 'AlertBasic')
    })
      .then(Component => {
        this.AlertBasicComponent = Component
        // Display fallback UI
        this.setState({ hasError: true })
      })
  }

  render () {
    const { buttonLabel, children, icon, message } = this.props

    return (
      <Fragment>
        {children}
        {this.state.hasError &&
          <div className='sui-ErrorAppBoundary-notification'>
            <this.AlertBasicComponent
              actions={[{
                handle: () => { this.setState({ hasError: false }) },
                text: buttonLabel
              }]}
              icon={icon}
              type='info'
            >
              <p>{message}</p>
            </this.AlertBasicComponent>
          </div>
        }
      </Fragment>
    )
  }
}

ErrorAppBoundary.displayName = 'ErrorAppBoundary'
ErrorAppBoundary.propTypes = {
  /**
   * Label for the button shown on the notification
   */
  buttonLabel: PropTypes.string,
  /**
   * Wrapped childrens to control errors
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  /**
   * Customize the icon you want to show on the notification
   */
  icon: PropTypes.element,
  /**
   * Message to show to the user in order to inform him about the error
   */
  message: PropTypes.string,
  /**
   * In order to avoid infinite loops for errors on render, do a shortcircuit if the component
   * can't handle all the errors that are coming
   */
  numberOfToleratedErrors: PropTypes.number,
  /**
   * Execute some code for each error. Useful for sending traces to some service in order to log
   * and track errors in the frontend
   */
  onError: PropTypes.func,
  /**
   * If the numberOfToleratedErrores is surpassed, then we could redirect the user to a different
   * URL in order to inform him that the web is definitely broken and unusable
   */
  redirectUrlOnUntolerated: PropTypes.string
}

ErrorAppBoundary.defaultProps = {
  buttonLabel: 'OK',
  message: 'Error',
  numberOfToleratedErrors: 4,
  onError: ({ errorMessage, errorStack }) => console.error({ errorMessage, errorStack })
}

export default ErrorAppBoundary
