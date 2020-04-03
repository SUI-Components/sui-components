import React from 'react'

export default BaseComponent =>
  class BaseComponentWithState extends React.Component {
    // eslint-disable-next-line react/prop-types
    state = {value: this.props.value || ''}

    handleChange = (e, {value}) => {
      this.setState({value})
    }

    render() {
      const {value} = this.state
      const {handleChange, props} = this
      return <BaseComponent {...props} value={value} onChange={handleChange} />
    }
  }
