import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

class ErrorAppBoundary extends Component {
  AlertBasicComponent = null
  state = { hasError: false }
  componentDidCatch (errorMessage, errorStack) {
    // for now, just log in the console but in the future, send the error to some service
    this.props.onError({ errorMessage, errorStack })
    // import async the alert basic component
    import(/* webpackChunkName: "AlertBasic" */ '@schibstedspain/sui-alert-basic')
      .then(Component => {
        this.AlertBasicComponent = Component.default
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
  buttonLabel: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  icon: PropTypes.element,
  message: PropTypes.string,
  onError: PropTypes.func
}

ErrorAppBoundary.defaultProps = {
  buttonLabel: 'OK',
  message: 'Error',
  onError: ({ errorMessage, errorStack }) => console.error({ errorMessage, errorStack })
}

export default ErrorAppBoundary
