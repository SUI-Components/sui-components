import React, {Component} from 'react'

import MoleculePagination from '../../../../../components/molecule/pagination/src'
import {prevButtonIcon, nextButtonIcon} from '../Icons'

const Icons = {prevButtonIcon, nextButtonIcon}

class DynamicMoleculePagination extends Component {
  state = {
    page: this.props.page // eslint-disable-line
  }

  updatePage = (e, {page}) => {
    console.log({e, page}) // eslint-disable-line
    this.setState({page}, () => {
      console.log(this.state) // eslint-disable-line
    })
  }

  render() {
    const {page} = this.state
    return (
      <div>
        <MoleculePagination
          {...Icons}
          {...this.props}
          page={page}
          onSelectNext={this.updatePage}
          onSelectPrev={this.updatePage}
          onSelectPage={this.updatePage}
        />
        <pre>{JSON.stringify({...this.props, ...this.state}, null, 2)}</pre>
      </div>
    )
  }
}

export default DynamicMoleculePagination
