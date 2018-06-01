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

  get classNames () {
    const { loading, error } = this.state
    const { className, placeholder } = this.props
    return cx(
      BASE_CLASS,
      className,
      placeholder && `${BASE_CLASS}--placeholder`,
      `is-${loading ? 'loading' : 'loaded'}`,
      error && `is-error`
    )
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
      skeleton,
      bgStyles,
      spinner: Spinner,
      errorIcon,
      errorText,
      src
    } = this.props
    const { loading, error } = this.state

    const figureStyles = {
      backgroundImage: `url(${placeholder || skeleton})`,
      ...bgStyles
    }

    return (
      <div className={this.classNames}>
        <figure
          className={`${BASE_CLASS}-figure`}
          style={!error && (placeholder || skeleton) ? figureStyles : {}}
        >
          <img
            src={src}
            className={`${BASE_CLASS}-image`}
            onLoad={this.handleLoad}
            onError={this.handleError}
            {...this._imageProps}
          />
        </figure>
        {!error &&
          loading &&
          Spinner && <Spinner className={`${BASE_CLASS}-spinner`} />}
        {error && (
          <Error
            className={`${BASE_CLASS}-error`}
            icon={errorIcon}
            text={errorText}
          />
        )}
      </div>
    )
  }
}

AtomImage.displayName = 'AtomImage'
AtomImage.propTypes = types

export default AtomImage
