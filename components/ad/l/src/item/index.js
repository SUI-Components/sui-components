/* eslint no-console: 0, no-undef: 0 */
import PropTypes from 'prop-types'

import React, { Component } from 'react'
import LazyLoad from 'react-lazy-load'
import { loadScript } from '../libs/load-script'
import { sandBoxDocumentWrite } from '../libs/sandbox-document.write'

export default class AdItem extends Component {
  static get SYMBOL () {
    return 'OAS_RICH'
  }

  constructor () {
    super()
    this.adItem = null
    this.adsLoaded = []
    this.state = {
      url: ''
    }
  }

  /**
   * loadAd will load the script file from pao, the steps are the following:
   *
   * loadScript will create an object on window (SYMBOL)
   * window[SYMBOL] is a function that, given a ad position it creates the add using document.write
   *
   * Then we send the tracking pixel
   * Then we send the output of the window[SYMBOL] through a sandbox that will convert all the document.write calls
   * into a string
   * And finally we render that output ad using postscribe in the `this.adItem` DOM object
   *
   * @param {String} id The position of the add (Middle1, Middle2, Top, etc..)
   * @param {String} The PAO url of the ad script
   *
   */
  _loadAd (id, url) {
    const postscribe = require('postscribe')
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

  /**
   * We reload the Ad every time the url changes
   * The url comes with a random, so, even if we don't change the url
   * we will reload the Ad
   *
   * @params {Object} nextProps
   */
  componentWillReceiveProps (nextProps) {
    const {id, url: nextPropsUrl} = nextProps
    const {url: stateUrl} = this.state
    if (nextPropsUrl !== stateUrl) {
      window[AdItem.SYMBOL] = null

      this.setState({ nextPropsUrl })
      this._loadAd(id, nextPropsUrl)
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

    /**
     * This is the magic function
     * It will be called when the lazyload renders the inner component
     * For reasons I don't understand, this function will be called 2 times
     *
     * The first time the node (this.adItem) is null so we will not be able to render the ad
     * So we update the state of the component to force a second load
     *
     * The second call the node exists and then we are able to render the add
     *
     * It will never be called again, it's only called twice on first render
     */
    const onContentVisible = () => this.adItem
      ? this._loadAd(id, url)
      : this.setState({ url })

    return (
      <LazyLoad
        debounce={debounce}
        offsetVertical={offsetVertical}
        onContentVisible={onContentVisible}
      >
        <div
          key={this.state.url}
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
