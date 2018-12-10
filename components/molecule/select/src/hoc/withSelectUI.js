import React, {Component} from 'react'

export default BaseComponent => {
  const displayName = BaseComponent.displayName

  return class WithSelectUi extends Component {
    static displayName = `WithSelectUi(${displayName})`

    render() {
      const {onClick, ...props} = this.props // eslint-disable-line

      return (
        <div
          style={{position: 'relative', cursor: 'pointer'}}
          onClick={onClick}
        >
          <BaseComponent {...props} readOnly />
          <span
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px'
            }}
          >
            ▼
          </span>
        </div>
      )
    }
  }
}
