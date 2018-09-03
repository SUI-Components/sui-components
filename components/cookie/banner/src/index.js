import PropTypes from 'prop-types'
import React, {Component} from 'react'
import IconX from '@schibstedspain/sui-svgiconset/lib/X'

const COOKIE_TTL = 31557600000

class CookieBanner extends Component {
  state = {
    hasAcceptedCookies: true,
    listeningScroll: false
  }

  _addScrollListener = () => {
    if (!this.state.hasAcceptedCookies && this.props.dismissOnScroll) {
      window.addEventListener('scroll', this._onScroll, false)
      this.setState({listeningScroll: true})
    }
  }

  _getHasAcceptedCookie() {
    // based on https://github.com/litejs/browser-cookie-lite/blob/master/index.js#L26
    return decodeURIComponent(
      (
        `; ${document.cookie}`.split(`; ${this.props.cookieKey}=`)[1] || ''
      ).split(';')[0]
    )
  }

  _setHasAcceptedCookie() {
    // save the cookie with a true value
    const value = `${this.props.cookieKey}=true`
    // set the expiration date for a better browser support (IE11 has problems with max-age)
    const expires = `expires=${new Date(
      +new Date() + COOKIE_TTL
    ).toUTCString()}`
    // Set the cookie with the value and the expiration date
    document.cookie = `${value};${expires}`
  }

  _handleClick = () => {
    this._onAcceptCookies()
  }

  _onAcceptCookies() {
    this._setHasAcceptedCookie()
    this._removeScrollListener()
    this.setState({hasAcceptedCookies: true}, () =>
      this.props.onChange(!this.state.hasAcceptedCookies)
    )
  }

  _onScroll = () => {
    if (window.pageYOffset > this.props.dismissOnScrollThreshold) {
      this._onAcceptCookies()
    }
  }

  _removeScrollListener = () => {
    if (this.state.listeningScroll) {
      window.removeEventListener('scroll', this._onScroll)
      this.setState({listeningScroll: false})
    }
  }

  _renderCookiePolicy({message, link}) {
    if (message && link) {
      return (
        <a className="sui-CookieBanner-link" href={link} target="_blank">
          {message}
        </a>
      )
    }
  }

  componentDidMount() {
    // when mounting, to avoid showing the banner on the server, get the cookie
    const hasAcceptedCookies = this._getHasAcceptedCookie()
    // we set the state with the value, and add the scroll listener then if user hasn't accepted the cookies
    this.setState(
      {
        hasAcceptedCookies
      },
      () => {
        this._addScrollListener(this.state)
        this.props.onChange(!this.state.hasAcceptedCookies)
      }
    )
  }

  componentWillUnmount() {
    this._removeScrollListener()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.hasAcceptedCookies !== nextState.hasAcceptedCookies
  }

  render() {
    const {hasAcceptedCookies} = this.state
    if (hasAcceptedCookies) {
      return null
    }

    const {cookiePolicy, iconClose, message} = this.props

    return (
      <div className="sui-CookieBanner">
        <div className="sui-CookieBanner-content">
          <span className="sui-CookieBanner-message">
            {message}
            {this._renderCookiePolicy(cookiePolicy)}
          </span>
          <button
            className="sui-CookieBanner-closeButton"
            onClick={this._handleClick}
          >
            {iconClose}
          </button>
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
  onChange: isDisplayed => isDisplayed,
  iconClose: (
    <IconX svgClass="sui-CookieBanner-closeIcon" fill="#000" size={16} />
  )
}

CookieBanner.propTypes = {
  /**
   * onChange is a function that return a boolean that means if cookieBanner is or isn't displayed.
   */
  onChange: PropTypes.func,
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
  iconClose: PropTypes.element,
  /**
   * Message written inside default cookie banner
   */
  message: PropTypes.string.isRequired
}

export default CookieBanner
