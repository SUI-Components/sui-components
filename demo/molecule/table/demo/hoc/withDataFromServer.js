import React, {Component} from 'react'

export default BaseComponent => getDynamicData => {
  const displayName = BaseComponent.displayName

  return class withDynamicData extends Component {
    static displayName = `withDynamicOptions(${displayName})`

    state = {dataSource: null}

    async componentDidMount() {
      this.fetchData()
    }

    fetchData = async ({sortBy, order} = {}) => {
      const dataSource = await getDynamicData({sortBy, order})
      this.setState({dataSource}) // eslint-disable-line
    }

    changeOrder = (pagination, filters, {columnKey: sortBy, order} = {}) => {
      this.fetchData({sortBy, order})
    }

    render() {
      const {props, changeOrder} = this
      const {dataSource} = this.state
      return (
        <BaseComponent
          {...props}
          dataSource={dataSource}
          onChange={changeOrder}
        />
      )
    }
  }
}
