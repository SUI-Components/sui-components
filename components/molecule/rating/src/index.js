import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import RatingSVG from 'react-rating-svg'

const BASE_CLASS = `sui-MoleculeRating`
class MoleculeRating extends Component {
  state = {
    value: 0
  }

  handleChange(value, name) {
    console.log(name, value)
    this.setState({value: value})
  }

  render() {
    const {value} = this.state
    const {handleChange} = this

    return (
      <div className={BASE_CLASS}>
        <RatingSVG
          name="my-controlled-rating"
          value={value}
          onChange={handleChange}
        />
      </div>
    )
  }
}

MoleculeRating.displayName = 'MoleculeRating'

// Remove these comments if you need
// MoleculeRating.contextTypes = {i18n: PropTypes.object}
// MoleculeRating.propTypes = {}
// MoleculeRating.defaultProps = {}

export default MoleculeRating
