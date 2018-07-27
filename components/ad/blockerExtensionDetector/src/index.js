import React, {Component} from 'react'
import PropTypes from 'prop-types'

class AdBlockerExtensionDetector extends Component {
  constructor(props) {
    super(props)
    this.blockDetector = React.createRef()
    this.state = {
      displayBanner: false
    }
  }

  _detectIfAdBlockerIsEnabled = () => {
    const blockDetector = this.blockDetector.current

    const isBlockerAdviseActive = blockDetector.offsetHeight === 0
    this.setState(
      {
        displayBanner: isBlockerAdviseActive
      },
      () => blockDetector.remove()
    )
  }

  componentDidMount() {
    this._detectIfAdBlockerIsEnabled()
  }

  render() {
    const {children} = this.props
    return (
      <React.Fragment>
        {this.state.displayBanner && children}
        <div ref={this.blockDetector} className="adsbox">
          &nbsp;
        </div>
      </React.Fragment>
    )
  }
}

AdBlockerExtensionDetector.displayName = 'AdBlockerExtensionDetector'

AdBlockerExtensionDetector.propTypes = {
  children: PropTypes.node
}

export default AdBlockerExtensionDetector
