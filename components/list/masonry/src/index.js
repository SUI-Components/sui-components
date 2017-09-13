import React, { PropTypes } from 'react'
import cx from 'classnames'

const DEFAULT_COLS = 1

class ListMasonry extends React.Component {
  constructor (props) {
    super(props)
    this.state = {columns: DEFAULT_COLS}
  }
  componentDidMount () {
    this._onResize()
    window.addEventListener('resize', this._onResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this._onResize)
  }

  _getColumns (width) {
    return this.props.breakPoints.reduceRight((collector, current, index) => {
      return current < width ? collector : index
    }, this.props.breakPoints.length) + 1
  }

  _onResize = () => {
    const columns = this._getColumns(this.listMasonry.offsetWidth)
    if (columns !== this.state.columns) {
      this.setState({columns})
    }
  }

  _mapChildren () {
    let col = []
    const numColumns = this.state.columns
    for (let i = 0; i < numColumns; i++) {
      col.push([])
    }
    return this.props.children.reduce((collector, current, index) => {
      collector[index % numColumns].push(current)
      return collector
    }, col)
  }

  render () {
    const masonryClassName = cx('sui-ListMasonry', this.props.className)
    return (
      <div className={masonryClassName} ref={node => (this.listMasonry = node)} >
        {this._mapChildren().map((col, columnIndex) => {
          return (
            <div className='sui-ListMasonry-column' key={columnIndex} >
              {col.map((child, index) => {
                return <div key={index} >{child}</div>
              })}
            </div>
          )
        })}
      </div>
    )
  }
}

export default ListMasonry

ListMasonry.displayName = 'ListMasonry'

ListMasonry.propTypes = {
  children: PropTypes.node.isRequired,
  breakPoints: PropTypes.array.isRequired,
  className: PropTypes.string
}
