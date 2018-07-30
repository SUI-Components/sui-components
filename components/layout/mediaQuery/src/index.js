import React, {Component} from 'react'

const BASE_CLASS = 'sui-LayoutMediaQuery'

class LayoutMediaQuery extends Component {
  render() {
    return (
      <div className={BASE_CLASS}>
        <h1>LayoutMediaQuery</h1>
      </div>
    )
  }
}

LayoutMediaQuery.displayName = 'LayoutMediaQuery'

export default LayoutMediaQuery
