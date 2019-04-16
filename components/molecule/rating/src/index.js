import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Star from './components/Star'

const BASE_CLASS = `sui-MoleculeRating`
class MoleculeRating extends Component {
  state = {
    value: 0
  }

  handleMouseMoveStar = (e, {index, value: valueStar}) => {
    const value = index + valueStar
    this.setState({value})
  }

  handleMouseLeaveStar = (e, {index, value: valueStar}) => {
    const value = index + valueStar
    this.setState({value})
  }

  render() {
    const {numStars} = this.props
    const {handleMouseMoveStar, handleMouseLeaveStar} = this
    const {value} = this.state
    return (
      <div className={BASE_CLASS}>
        {new Array(numStars)
          .fill(0)
          .map((_, index) => (
            <Star
              key={index}
              index={index}
              value={value}
              onMouseMove={handleMouseMoveStar}
              onMouseLeave={handleMouseLeaveStar}
            />
          ))}
      </div>
    )
  }
}

MoleculeRating.displayName = 'MoleculeRating'

// Remove these comments if you need
// MoleculeRating.contextTypes = {i18n: PropTypes.object}

MoleculeRating.propTypes = {
  /** Number of Stars */
  numStars: PropTypes.number
}

MoleculeRating.defaultProps = {
  numStars: 5
}

export default MoleculeRating
