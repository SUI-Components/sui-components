/* eslint-disable */

import React, {Component} from 'react'
import PropTypes from 'prop-types'

const withStateTags = BaseComponent => {
  const displayName = BaseComponent.displayName

  return class BaseComponentWithState extends Component {

    static displayName = `withStateTags(${displayName})`

    static propTypes = {
      /** value */
      value: PropTypes.any,  // valueTags

      /** onChange callback  */
      onChange: PropTypes.func // onChangeTags
    }

    static defaultProps = {
      onChange: () => {},
      onSelect: () => {},
    }

    state = {
      value: '' // valueInput
    }

    onChangeTags = (e, {tags, value}) => {
      const {onChange} = this.props // eslint-disable-line react/prop-types
      onChange(e, {value: tags})
      this.onChangeValue(e, {value:''})
    }

    onChangeValue = (e, {value}) => {
      this.setState({value})
    }

    render() {
      const {value} = this.state
      const {value:tags} = this.props
      const {onChangeTags, onChangeValue, props} = this
      return (
        <div>
          <BaseComponent
            {...props}
            tags={tags}
            value={value}
            onChangeTags={onChangeTags}
            onChange={onChangeValue}
          />
        </div>
      )
    }
  }
}

export default withStateTags
