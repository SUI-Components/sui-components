/* eslint no-console: 0, no-undef: 0 */
import React, { Component, PropTypes } from 'react'
import LazyLoad from 'react-lazy-load'
import { loadScript } from '../libs/load-script'
import { sandBoxDocumentWrite } from '../libs/sandbox-document.write'
import postscribe from 'postscribe'

export default class AdItem extends Component {
  static get SYMBOL () {
    return 'OAS_RICH'
  }

  constructor () {
    super()
    this.adItem = null
    this.adsLoaded = []
    this.state = {
      adUrl: ''
    }
  }

  _loadAd (id, url) {
    const isAdAlreadyLoaded = this.adsLoaded.indexOf(id) !== -1

    if (isAdAlreadyLoaded) {
      return
    }

    this.adsLoaded.push(id)
    this.setState({adUrl: url})

    loadScript({
      url,
      symbol: AdItem.SYMBOL
    })
    .then(() => {
      postscribe(
        this.adItem,
        sandBoxDocumentWrite(window[AdItem.SYMBOL], id)
      )
    })
    .catch(console.error.bind(console))
  }

  componentWillReceiveProps (nextProps) {
    const stateAdUrlSuffix = this.state.adUrl.split('@')[1]
    const nextPropsUrlSuffix = nextProps.url.split('@')[1]

    if (stateAdUrlSuffix !== nextPropsUrlSuffix) {
      window[AdItem.SYMBOL] = null
      this.adsLoaded = []

      this._loadAd(nextProps.id, nextProps.url)
    }
  }

  render () {
    const {
      id,
      url,
      classNamePrefix,
      debounce,
      offsetVertical
    } = this.props

    const onContentVisible = () => {
      this._loadAd(id, url)
    }

    return (
      <LazyLoad
        debounce={debounce}
        offsetVertical={offsetVertical}
        onContentVisible={onContentVisible}
      >
        <div
          key={this.state.adUrl}
          ref={node => (this.adItem = node)}
          className={`${classNamePrefix}-item`}
        />
      </LazyLoad>
    )
  }
}

AdItem.propTypes = {
  /**
   * Display position id
   */
  id: PropTypes.string.isRequired,
  /**
   * Ad platform request url
   */
  url: PropTypes.string.isRequired,
  /**
   * Optional className prefix for styling
   */
  classNamePrefix: PropTypes.string,
  /**
   * Optional lazy load debounce
   */
  debounce: PropTypes.bool,
  /**
   * Optional lazy load vertical offset
   */
  offsetVertical: PropTypes.number
}

AdItem.defaultProps = {
  debounce: false,
  offsetVertical: 200
}
