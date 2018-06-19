import React, {Component} from 'react'
import PropTypes from 'prop-types'

const STATUS_OK = 200
const COMPLETED = 4

class ServiceMarkdown extends Component {
  state = {html: ''}

  async componentDidMount() {
    require.ensure(
      [],
      require => {
        const markedLibrary = require('marked')
        const marked = markedLibrary.default || markedLibrary
        const req = new window.XMLHttpRequest()
        req.open('GET', this.props.src, true)
        req.onload = () => {
          if (req.readyState === COMPLETED) {
            if (req.status === STATUS_OK) {
              this.setState({html: marked(req.responseText)})
            }
          }
        }
        req.send(null)
      },
      'marked'
    )
  }

  render() {
    const {html} = this.state
    return <div dangerouslySetInnerHTML={{__html: html}} />
  }
}

ServiceMarkdown.displayName = 'ServiceMarkdown'

ServiceMarkdown.propTypes = {
  /**
   * The web address of the markdwon file to fetch and parse
   * For example "https://mycdn.com/myfile.md"
   */
  src: PropTypes.string.isRequired
}

export default ServiceMarkdown
