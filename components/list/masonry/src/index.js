import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'

const DEFAULT_COLS = 1

class ListMasonry extends React.Component {
  state = {
    columns: DEFAULT_COLS
  }

  componentDidMount() {
    this._onResize({firstResize: true})
    window.addEventListener('resize', this._onResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._onResize)
  }

  _getColumns(width) {
    return (
      this.props.breakPoints.reduceRight((collector, current, index) => {
        return current < width ? collector : index
      }, this.props.breakPoints.length) + 1
    )
  }

  _onResize = ({firstResize = false}) => {
    const {onColumnsReady, onColumnsUpdated} = this.props
    const columns = this._getColumns(this.listMasonry.offsetWidth)
    if (columns !== this.state.columns) {
      this.setState({columns}, () => {
        if (firstResize) {
          onColumnsReady()
        } else {
          onColumnsUpdated()
        }
      })
    }
  }

  _mapChildren() {
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

  render() {
    const masonryClassName = cx('sui-ListMasonry', this.props.className)

    return (
      <div className={masonryClassName} ref={node => (this.listMasonry = node)}>
        {this._mapChildren().map((col, columnIndex) => (
          <div className="sui-ListMasonry-column" key={columnIndex}>
            {col.map((child, index) => <div key={index}>{child}</div>)}
          </div>
        ))}
      </div>
    )
  }
}

export default ListMasonry

ListMasonry.displayName = 'ListMasonry'

ListMasonry.defaultProps = {
  onColumnsReady: () => {},
  onColumnsUpdated: () => {}
}

ListMasonry.propTypes = {
  children: PropTypes.node.isRequired,
  breakPoints: PropTypes.array.isRequired,
  className: PropTypes.string,
  onColumnsReady: PropTypes.func,
  onColumnsUpdated: PropTypes.func
}
