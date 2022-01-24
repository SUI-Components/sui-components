import {Component} from 'react'
import {Button} from '@s-ui/documentation-library'

import AtomSpinner, {AtomSpinnerTypes} from '../src/index.js'

class FullScreenSpinner extends Component {
  constructor(props) {
    super(props)
    this.state = {show: false}

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(ev) {
    this.setState({show: true})
    setTimeout(() => this.setState({show: false}), 5000)
  }

  render() {
    return (
      <>
        <Button onClick={this.handleClick}>
          Click to show fullscreen spinner for 5 seconds
        </Button>
        {this.state.show && <AtomSpinner type={AtomSpinnerTypes.FULL} />}
      </>
    )
  }
}

FullScreenSpinner.proptypes = {}

FullScreenSpinner.displayName = 'FullScreenSpinner'

export default FullScreenSpinner
