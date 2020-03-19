import React, {Component} from 'react'

export default BaseComponent => getDynamicData => {
  const displayName = BaseComponent.displayName

  return class withDynamicData extends Component {
    static displayName = `withDynamicData(${displayName})`

    state = {
      dataSource: null,
      sortBy: null,
      order: null,
      totalPages: 0,
      page: 1,
      pageSize: 10
    }

    async componentDidMount() {
      this.fetchData()
    }

    fetchData = async () => {
      const {sortBy, order, page, pageSize} = this.state
      const {
        pagination: {totalPages},
        data: dataSource
      } = await getDynamicData({
        sortBy,
        order,
        page,
        pageSize
      })
      this.setState({dataSource, totalPages})
    }

    onChangeOrder = ({sortBy, order} = {}) => {
      this.setState({sortBy, order}, () => this.fetchData())
    }

    onChangePage = ({page} = {}) => {
      this.setState({page}, () => this.fetchData())
    }

    onChangePageSize = ({pageSize} = {}) => {
      this.setState({pageSize}, () => this.fetchData())
    }

    render() {
      const {props, onChangeOrder, onChangePage, onChangePageSize} = this
      const {dataSource, sortBy, order, totalPages, page, pageSize} = this.state
      const eventsTableField = {
        onChangeOrder,
        onChangePage,
        onChangePageSize
      }
      const dataTableField = {
        dataSource,
        sortBy,
        order,
        totalPages,
        page,
        pageSize
      }

      return (
        <BaseComponent {...props} {...eventsTableField} {...dataTableField} />
      )
    }
  }
}
