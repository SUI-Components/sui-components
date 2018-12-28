/* eslint-disable */

import React, {Component} from 'react'
import PropTypes from 'prop-types'

const withStateTags = BaseComponent => {
  return class BaseComponentWithState extends Component {
    static propTypes = {
      /** value */
      value: PropTypes.any,

      /** tags */
      tags: PropTypes.any,

      /** onChange callback  */
      onChange: PropTypes.func,

      /** onSelect callback  */
      onSelect: PropTypes.func
    }

    static defaultProps = {
      onChange: () => {},
      onSelect: () => {},
    }

    state = {
      tags: this.props.tags || [],
      value: this.props.value || ''
    }

    onChangeTags = (e, {tags, value}) => {
      const {onSelect} = this.props // eslint-disable-line react/prop-types
      this.setState({tags, value}, () => {
        onSelect(e, {tags, value})
      })
    }

    onChange = (e, {value}) => {
      const {onChange} = this.props // eslint-disable-line react/prop-types
      this.setState({value}, () => {
        onChange(e, {value})
      })
    }

    render() {
      const {tags, value} = this.state
      const {onChangeTags, onChange, props} = this
      return (
        <div>
          <BaseComponent
            {...props}
            tags={tags}
            value={value}
            onChangeTags={onChangeTags}
            onChange={onChange}
          />
        </div>
      )
    }
  }
}

export default withStateTags
