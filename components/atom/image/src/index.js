import React, { Component } from 'react'
import cx from 'classnames'

import { types } from './types'
import { Error } from './components'

const BASE_CLASS = 'sui-AtomImage'

class AtomImage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      error: false
    }
  }

  get _classNames () {
    const { loading, error } = this.state
    const { placeholder, skeleton } = this.props
    return cx(
      BASE_CLASS,
      this.props.className,
      placeholder && `${BASE_CLASS}--placeholder`,
      skeleton &&
        `${BASE_CLASS}--skeleton``is-${loading ? 'loading' : 'loaded'}`,
      error && `is-error`
    )
  }

  get _imageClassNames () {
    return cx()
  }

  handleLoad = () => {
    const { onLoad } = this.props
    this.setState({ loading: false })
    onLoad && onLoad()
  }

  handleError = () => {
    const { onError } = this.props
    this.setState({
      error: true,
      loading: false
    })
    onError && onError()
  }

  render () {
    const {
      placeholder,
      spinner: Spinner,
      fallbackIcon,
      fallbackText,
      src
    } = this.props
    const { error } = this.state
    const placeholderStyles = {
      backgroundImage: `url(${placeholder})`
    }

    return (
      <figure
        className={this._classNames}
        style={!error && placeholder ? placeholderStyles : {}}
      >
        <img
          src={src}
          className={`${BASE_CLASS}-image`}
          onLoad={this.handleLoad}
          onError={this.handleError}
          {...this._imageProps}
        />
        {!error && <Spinner />}
        {error && (
          <Error
            className={`${BASE_CLASS}-error`}
            icon={fallbackIcon}
            text={fallbackText}
          />
        )}
      </figure>
    )
  }
}

AtomImage.displayName = 'AtomImage'
AtomImage.propTypes = types

export default AtomImage
