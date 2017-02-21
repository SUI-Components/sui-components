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

  static get propTypes () {
    return {
      id: PropTypes.string.isRequired,
      url: PropTypes.string,
      classNamePrefix: PropTypes.string,
      debounce: PropTypes.bool,
      offsetVertical: PropTypes.number
    }
  }

  static get defaultProps () {
    return {
      debounce: false,
      offsetVertical: 200
    }
  }

  constructor () {
    super()
    this.adItem = null
    this.adsLoaded = []
    this.state = {
      adUrl: ''
    }
  }

  loadAd (id, url) {
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

      this.loadAd(nextProps.id, nextProps.url)
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
      this.loadAd(id, url)
    }

    return (
      <LazyLoad
        debounce={debounce}
        offsetVertical={offsetVertical}
        onContentVisible={onContentVisible}
      >
        <div
          key={this.state.adUrl}
          ref={node => this.adItem = node}
          className={`${classNamePrefix}-item`}
        />
      </LazyLoad>
    )
  }
}
