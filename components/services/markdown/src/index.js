import React, {Component} from 'react'
import PropTypes from 'prop-types'

const STATUS_OK = 200

class ServiceMarkdown extends Component {
  state = {html: ''}

  async componentDidMount() {
    const marked = await import('marked')
    const req = new window.XMLHttpRequest()
    req.open('GET', this.props.src, false)
    req.send(null)
    if (req.status === STATUS_OK) {
      this.setState({html: marked(req.responseText)})
    }
  }

  render() {
    const {html} = this.state
    return <div dangerouslySetInnerHTML={{__html: html}} />
  }
}

ServiceMarkdown.displayName = 'ServiceMarkdown'

ServiceMarkdown.propTypes = {
  src: PropTypes.string.isRequired
}

export default ServiceMarkdown
