import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import LazyLoad from 'react-lazy-load'
import SpinnerBasic from '@schibstedspain/sui-spinner-basic'

const aspectRatios = require('./config.json')['aspect-ratios'].map(
  aspectRatio => aspectRatio.replace(new RegExp(/'/, 'g'), '')
)

/**
 * Component that will print defer loading images with an optional and specific
 * aspect ratio.
 */
export default class ImageLazyLoad extends Component {
  state = {
    loading: true
  }

  _hideSpinner = () => {
    this.setState({ loading: false })
  }

  _doNothing = () => {}

  render () {
    const { loading } = this.state
    const {
      debounce,
      offsetVertical,
      src,
      showSpinner,
      aspectRatio = ''
    } = this.props
    const lazyLoadWrapClassName = cx('sui-ImageLazyLoad', {
      [`sui-ImageLazyLoad--ratio-${aspectRatio.replace(':', '-')}`]: aspectRatio
    })

    return (
      <div className={lazyLoadWrapClassName}>
        {(loading && showSpinner) &&
          <div className='sui-ImageLazyLoad-spinner'>
            <SpinnerBasic />
          </div>
        }
        <div className='sui-ImageLazyLoad-imageWrap'>
          <LazyLoad
            debounce={debounce}
            offsetVertical={offsetVertical}
            onContentVisible={showSpinner ? this._hideSpinner : this._doNothing}
          >
            <img className='sui-ImageLazyLoad-image' src={src} />
          </LazyLoad>
        </div>
      </div>
    )
  }
}

ImageLazyLoad.propTypes = {
  /**
   * By default the throttling function is actually a debounce function so that
   * the checking function is only triggered after a user stops scrolling. To
   * use traditional throttling where it will only check the loadable content
   * every throttle milliseconds, set debounce to false.
   */
  debounce: PropTypes.bool,
  /**
   * This option allows you to specify how far above and below the viewport you
   * want to begin displaying your content.
   */
  offsetVertical: PropTypes.number,
  /**
   * Image element source.
   */
  src: PropTypes.string.isRequired,
  /**
   * Flag to show a spinner while the image resource is loading.
   */
  showSpinner: PropTypes.bool,
  /**
   * Optional aspect ratio of the image.
   */
  aspectRatio: PropTypes.oneOf(aspectRatios)
}

ImageLazyLoad.defaultProps = {
  debounce: false,
  offsetVertical: 100,
  showSpinner: true
}

ImageLazyLoad.displayName = 'ImageLazyLoad'
