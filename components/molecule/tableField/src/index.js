import React, {Component} from 'react'
import PropTypes from 'prop-types'

import MoleculePagination from '@s-ui/react-molecule-pagination'

import MoleculeTable from '../../table/src'
import BlockRowSelection from './components/BlockRowSelection/'

import WithStateTableField from './hoc/WithStateTableField'

const BASE_CLASS = `sui-MoleculeTableField`
const CLASS_PAGINATION = `${BASE_CLASS}-pagination`

class MoleculeTableField extends Component {
  handleChangeSizePage = (_, {value}) => {
    const {onChangePageSize} = this.props
    onChangePageSize({pageSize: value})
  }

  onSelectNext = (_, {page}) => {
    const {onChangePage} = this.props
    onChangePage({page})
  }

  onSelectPrev = (_, {page}) => {
    const {onChangePage} = this.props
    onChangePage({page})
  }

  onSelectPage = (_, {page}) => {
    const {onChangePage} = this.props
    onChangePage({page})
  }

  onChange = (pagination, filters, {columnKey: sortBy, order} = {}) => {
    const {onChangeOrder} = this.props
    onChangeOrder({sortBy, order})
  }

  get extendedBlockRowSelection() {
    /* eslint-disable react/prop-types */
    const {
      blockRowSelection,
      textPreSelect,
      textAfterSelect,
      optionsNumRows,
      pageSize
    } = this.props

    const {handleChangeSizePage} = this

    return React.cloneElement(blockRowSelection, {
      pageSize,
      textPreSelect,
      textAfterSelect,
      optionsNumRows,
      onChangeDisplayNumRows: handleChangeSizePage
    })
  }

  render() {
    const {
      blockRowSelection,
      optionsNumRows,
      onChangeDisplayNumRows,
      dataSource,
      totalPages,
      sortBy,
      order,
      page,
      pageSize,
      ...props
    } = this.props

    const {onSelectPage, onSelectPrev, onSelectNext, onChange} = this

    const {extendedBlockRowSelection} = this
    const eventsPagination = {
      onSelectNext,
      onSelectPage,
      onSelectPrev
    }

    return (
      <div className={BASE_CLASS}>
        {extendedBlockRowSelection}
        <MoleculeTable {...props} dataSource={dataSource} onChange={onChange} />
        <div className={CLASS_PAGINATION}>
          <MoleculePagination
            totalPages={totalPages}
            page={page}
            {...eventsPagination}
          />
        </div>
      </div>
    )
  }
}

MoleculeTableField.displayName = 'MoleculeTableField'

MoleculeTableField.propTypes = {
  blockRowSelection: PropTypes.node,
  textPreSelect: PropTypes.string,
  textAfterSelect: PropTypes.string,
  onChangeOrder: PropTypes.func,
  onChangePage: PropTypes.func,
  onChangePageSize: PropTypes.func,
  optionsNumRows: PropTypes.array
}

MoleculeTableField.defaultProps = {
  blockRowSelection: <BlockRowSelection />,
  textPreSelect: 'Show',
  textAfterSelect: 'entries',
  onChangePageSize: () => {},
  onChangePage: () => {},
  onChangeOrder: () => {},
  optionsNumRows: [10, 25, 50]
}

export {WithStateTableField}
export default MoleculeTableField
