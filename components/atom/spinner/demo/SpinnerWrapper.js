import {Component} from 'react'
import {Paragraph} from '@s-ui/documentation-library'

import AtomSpinner from '../src/index.js'
import {dashStyle} from './settings.js'

class SpinnerWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {contentLoaded: false}
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({contentLoaded: true})
    }, 5000)
  }

  render() {
    const {contentLoaded} = this.state
    return contentLoaded ? (
      <Paragraph style={dashStyle}>
        Content loaded, spinner disappears
      </Paragraph>
    ) : (
      <Paragraph style={dashStyle}>
        Slowly loading content, delayed spinner will be shown
        <AtomSpinner delayed />
      </Paragraph>
    )
  }
}

SpinnerWrapper.propTypes = {}

SpinnerWrapper.displayName = 'SpinnerWrapper'

export default SpinnerWrapper
