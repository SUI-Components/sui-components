import React, {Component} from 'react'
import PropTypes from 'prop-types'

const BASE_CLASS = 'sui-AtomTextarea'

class AtomTextarea extends Component {
  render() {
    return <textarea className={BASE_CLASS}>{this.props.children}</textarea>
  }
}

AtomTextarea.displayName = 'AtomTextarea'

// Remove these comments if you need
// AtomTextarea.contextTypes = {i18n: PropTypes.object}
// AtomTextarea.propTypes = {}
// AtomTextarea.defaultProps = {}

export default AtomTextarea
