import React, {Component} from 'react'
import PropTypes from 'prop-types'

class AtomUpload extends Component {
  render() {
    const {icon: Icon, text} = this.props
    return (
      <div className="sui-AtomUpload">
        <span className>
          <Icon />
        </span>
        <p>{text}</p>
      </div>
    )
  }
}

AtomUpload.displayName = 'AtomUpload'

AtomUpload.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  text: PropTypes.string
}

AtomUpload.defaultProps = {
  text: 'Click or drag file to this area to upload'
}

export default AtomUpload
