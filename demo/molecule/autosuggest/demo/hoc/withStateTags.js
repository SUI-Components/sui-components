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
      console.log(`withStateTags:onChangeTags:tags → ${tags}`)
      onChange(e, {value: tags})
    }

    onChange = (e, {value}) => {
      console.log({value})
      this.setState({value})
    }

  
    // onChange: PropTypes.func,
    // onChangeTags: PropTypes.func,
    // onSelect: PropTypes.func,


    render() {
      const {value} = this.state
      const {value:tags, onChange: onChangeTags} = this.props
      const {onChange, props} = this
      console.log({value, tags})
      console.log(`withStateTags:render`)
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
