/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React, {Component} from 'react'
import PropTypes from 'prop-types'

import MoleculeButtonGroup from '@s-ui/react-molecule-button-group'
import AtomButtom from '@schibstedspain/sui-atom-button'

const BASE_CLASS = 'sui-MoleculePagination'

class MoleculePagination extends Component {
  highRange(current, totalPages, pageBreak = 10) {
    if (current > totalPages) return totalPages
    const high = current + (pageBreak - (current % pageBreak))
    // console.log(`high → ${high}`)
    // console.log(`totalPages → ${totalPages}`)
    return high < totalPages ? high : totalPages
  }

  lowRange(current, pageBreak = 10) {
    return current + (pageBreak - (current % pageBreak)) - pageBreak
  }

  isTherePrev(current, pageBreak = 10) {
    return current - pageBreak > 0
  }

  isThereNext(current, totalPages, pageBreak = 10) {
    return this.highRange(current, pageBreak) < totalPages
  }

  range(currentPage, showPages, totalPages) {
    const lowRange = this.lowRange(currentPage, showPages)
    const highRange = this.highRange(currentPage, totalPages, showPages)
    const rangeNumItems =
      highRange === totalPages ? totalPages - lowRange : showPages
    // console.log({currentPage, showPages, totalPages})
    // console.log({lowRange, highRange, rangeNumItems})
    return [...Array.from(new Array(rangeNumItems), (_, i) => lowRange + i + 1)]
  }

  render() {
    const {totalPages, currentPage, showPages, compressed} = this.props
    // console.log({totalPages, currentPage, showPages, compressed})
    const range = this.range(currentPage, showPages, totalPages)
    // console.log(range)
    return (
      <div className={BASE_CLASS}>
        <MoleculeButtonGroup>
          {range.map((page, index) => (
            <AtomButtom key={index} onClick={e => window.alert('clicked A')}>
              {page}
            </AtomButtom>
          ))}
        </MoleculeButtonGroup>
      </div>
    )
  }
}

MoleculePagination.displayName = 'MoleculePagination'

// Remove these comments if you need
// MoleculePagination.contextTypes = {i18n: PropTypes.object}
MoleculePagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  showPages: PropTypes.number,
  compressed: PropTypes.bool
}

MoleculePagination.defaultProps = {
  showPages: 10,
  compressed: false
}

export default MoleculePagination
