import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

class ErrorAppBoundary extends Component {
  MoleculeNotification = null
  state = {errorCount: 0, hasError: false}
  componentDidCatch(errorMessage, errorStack) {
    const {errorThreshold, onError, redirectUrlOnBreakingThreshold} = this.props
    const {errorCount} = this.state

    onError({errorMessage, errorStack})
    this.setState({errorCount: errorCount + 1})

    return errorCount >= errorThreshold
      ? redirectUrlOnBreakingThreshold &&
          (window.location.href = redirectUrlOnBreakingThreshold)
      : this._loadNotification()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.errorCount <= nextProps.errorThreshold
  }

  _loadNotification() {
    new Promise(resolve => {
      require.ensure(
        [],
        require => {
          resolve(require('@s-ui/react-molecule-notification').default)
        },
        'MoleculeNotification'
      )
    }).then(Component => {
      this.MoleculeNotification = Component
      // Display fallback UI
      this.setState({hasError: true})
    })
  }

  render() {
    const {buttonLabel, children, message} = this.props

    return (
      <Fragment>
        {children}
        {this.state.hasError && (
          <div className="sui-ErrorAppBoundary-notification">
            <this.MoleculeNotification
              buttons={[
                {
                  type: 'secondary',
                  negative: true,
                  children: buttonLabel,
                  onClick: () => {
                    this.setState({hasError: false})
                  }
                }
              ]}
              type="warning"
              text={message}
              position="bottom"
            />
          </div>
        )}
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
   * Message to show to the user in order to inform him about the error
   */
  message: PropTypes.string,
  /**
   * In order to avoid infinite loops for errors on render, do a shortcircuit if the component
   * can't handle all the errors that are coming
   */
  errorThreshold: PropTypes.number,
  /**
   * Execute some code for each error. Useful for sending traces to some service in order to log
   * and track errors in the frontend
   */
  onError: PropTypes.func,
  /**
   * If the numberOfToleratedErrores is surpassed, then we could redirect the user to a different
   * URL in order to inform him that the web is definitely broken and unusable
   */
  redirectUrlOnBreakingThreshold: PropTypes.string
}

ErrorAppBoundary.defaultProps = {
  buttonLabel: 'OK',
  message: 'Error',
  errorThreshold: 4,
  onError: ({errorMessage, errorStack}) =>
    console.error({errorMessage, errorStack}) // eslint-disable-line
}

export default ErrorAppBoundary
