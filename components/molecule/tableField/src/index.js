import React, {Component} from 'react'
import PropTypes from 'prop-types'

import MoleculePagination from '@s-ui/react-molecule-pagination'

import MoleculeTable from '../../table/src'
import BlockRowSelection from './components/BlockRowSelection/'

const BASE_CLASS = `sui-MoleculeTableField`
const CLASS_PAGINATION = `${BASE_CLASS}-pagination`

class MoleculeTableField extends Component {
  /* eslint-disable react/prop-types */
  get extendedBlockRowSelection() {
    const {
      blockRowSelection,
      textPreSelect,
      textAfterSelect,
      optionsNumRows,
      onChangeDisplayNumRows
    } = this.props

    return React.cloneElement(blockRowSelection, {
      textPreSelect,
      textAfterSelect,
      optionsNumRows,
      onChangeDisplayNumRows
    })
  }

  render() {
    const {
      blockRowSelection,
      optionsNumRows,
      onChangeDisplayNumRows,
      dataSource,
      ...props
    } = this.props
    const {extendedBlockRowSelection} = this

    return (
      <div className={BASE_CLASS}>
        {extendedBlockRowSelection}
        <MoleculeTable dataSource={dataSource} {...props} />
        <div className={CLASS_PAGINATION}>
          <MoleculePagination totalPages={25} page={7} />
        </div>
      </div>
    )
  }
}

MoleculeTableField.displayName = 'MoleculeTableField'

// Remove these comments if you need
// MoleculeTableField.contextTypes = {i18n: PropTypes.object}
MoleculeTableField.propTypes = {
  blockRowSelection: PropTypes.node,
  textPreSelect: PropTypes.string,
  textAfterSelect: PropTypes.string,
  onChangeDisplayNumRows: PropTypes.func,
  optionsNumRows: PropTypes.array
}

MoleculeTableField.defaultProps = {
  blockRowSelection: <BlockRowSelection />,
  textPreSelect: 'Show',
  textAfterSelect: 'entries',
  onChangeDisplayNumRows: () => {},
  optionsNumRows: [10, 25, 50]
}

export default MoleculeTableField
