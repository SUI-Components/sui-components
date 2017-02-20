/* eslint no-console: 0, no-undef: 0 */
import React, { Component, PropTypes } from 'react'
import LazyLoad from 'react-lazy-load'
import { loadScript } from '../libs/load-script'
import { sandBoxDocumentWrite } from '../libs/sandbox-document.write'
import postscribe from 'postscribe'

// const sendTrackingPixel = (url) => {
//   const img = new Image()
//   const [head] = url.split(/&XE&/)
//   const [params] = head.split(/\?/)
//   const rnd = parseInt(Math.random() * 1000000, 10)
//   const va = params
//     .replace(/&/gi, '|')
//     .replace(/\=/gi, '_')
//   img.src = `http://pao.scmspain.com/RealMedia/ads/adstream.cap?1${rnd}&c=oasCK_Fotocasa&va=${va}&e=1M`
// http://pao.scmspain.com/RealMedia/ads/adstream.cap?1345275679&c=oasCK_Coches&va=oasSite_coches|wsite_coches|oasTypeApp_desktop|oasMake_7|oasMakeStr_BMW|marca_bmw|oasSubsection_0|subseccion_0|oasSubsection2_0|subseccion2_0|oasSubsection3_0|subseccion3_0|tipomoto_0|oasWarranty_0|oasVehicle_Status_-1|oasVehicle_StatusStr_|oasKeyword_bmw|XE|oasSite_coches|wsite_coches|oasTypeApp_desktop|oasMake_7|oasMakeStr_BMW|marca_bmw|oasSubsection_0|subseccion_0|oasSubsection2_0|subseccion2_0|oasSubsection3_0|subseccion3_0|tipomoto_0|oasWarranty_0|oasVehicle_Status_-1|oasVehicle_StatusStr_|oasKeyword_bmw|tax23_RefDocLoc_http://www.coches.net/|if_nt_CookieAccept_Y|XE&e=1M
// }

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
      // sendTrackingPixel(url)
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
