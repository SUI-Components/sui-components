import React, {Component, PropTypes} from 'react'
import IconX from '@schibstedspain/sui-svgiconset/lib/X'

class CookieBanner extends Component {
  state = { listeningScroll: false }

  componentDidMount () {
    this._addScrollListener()
  }

  componentWillUnmount () {
    this._removeScrollListener()
  }

  _addScrollListener = () => {
    if (!this.state.listeningScroll &&
      !this._getHasAcceptedCookie() &&
      this.props.dismissOnScroll
    ) {
      window.addEventListener('scroll', this.onScroll, false)
      this.setState({ listeningScroll: true })
    }
  }

  _getHasAcceptedCookie () {
    // based on https://github.com/litejs/browser-cookie-lite/blob/master/index.js#L26
    return decodeURIComponent((
      (`; ${document.cookie}`)
        .split(`; ${this.props.cookieKey}=`)[1] || '')
        .split(';')[0])
  }

  _setHasAcceptedCookie () {
    const value = `${this.props.cookieKey}=true`
    const maxAge = `max-age=31557600`
    document.cookie = `${value};${maxAge}`
  }

  _onAcceptCookies () {
    this._setHasAcceptedCookie()
    if (this.state.listeningScroll) {
      this._removeScrollListener()
    } else {
      this.forceUpdate()
    }
  }

  _onScroll = () => {
    if (window.pageYOffset > this.props.dismissOnScrollThreshold) {
      this._onAcceptCookies()
    }
  }

  _removeScrollListener = () => {
    if (this.state.listeningScroll) {
      window.removeEventListener('scroll', this.onScroll)
      this.setState({ listeningScroll: false })
    }
  }

  _renderCookiePolicy ({ message, link }) {
    if (message && link) {
      return (
        <a className='sui-CookieBanner-link' href={link} target='_blank'>
          {message}
        </a>
      )
    }
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const hasAcceptedCookies = this._getHasAcceptedCookie()
    if (hasAcceptedCookies) {
      return null
    }

    const { cookiePolicy, iconClose: IconClose, message } = this.props

    return (
      <div className='sui-CookieBanner'>
        <div className='sui-CookieBanner-content'>
          <span className='sui-CookieBanner-message'>
            {message}
            {this._renderCookiePolicy(cookiePolicy)}
          </span>
          <IconClose svgClass='sui-CookieBanner-closeIcon' />
        </div>
      </div>
    )
  }
}

CookieBanner.displayName = 'CookieBanner'

CookieBanner.defaultProps = {
  cookieKey: 'user-has-accepted-cookies',
  dismissOnScroll: true,
  dismissOnScrollThreshold: 0,
  iconClose: IconX
}

CookieBanner.propTypes = {
  /**
   * Cookie-key used to save user's decision about you cookie-policy
   */
  cookieKey: PropTypes.string,
  /**
   * Object with infos used to render a link to your cookie-policy page
   */
  cookiePolicy: PropTypes.shape({
    message: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }),
  /**
   * Whether the cookie banner should be dismissed on scroll or not
   */
  dismissOnScroll: PropTypes.bool,
  /**
   * Number of pixels that the user has scrolled before dismissing banner scrolling
   */
  dismissOnScrollThreshold: PropTypes.number,
  /**
   * Icon to close the cookie banner
   */
  iconClose: PropTypes.func,
  /**
   * Message written inside default cookie banner
   */
  message: PropTypes.string.isRequired
}
// Remove these comments if you need
// CookieBanner.contextTypes = {i18n: React.PropTypes.object}
// CookieBanner.propTypes = {}
// CookieBanner.defaultProps = {}

export default CookieBanner
