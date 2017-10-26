import React, {PropTypes} from 'react'
import cx from 'classnames'
import {Socialtwitter, Socialfacebook, Commentsquare, Envelopeclosed} from '@schibstedspain/sui-svgiconset'

const getOnClickHandle = src => () => window.open(src)

const parseHttpSchemeOfUrl = (urlToEval) => {
  const isUrlValid = urlToEval.match(/http:\/\/|https:\/\//)
  return !isUrlValid ? `http://${urlToEval}` : urlToEval
}

const getShareDefinition = (url, shareText, type) => {
  const parsedShareUrl = url && parseHttpSchemeOfUrl(url)
  switch (type) {
    case 'facebook':
      return {
        src: `https://www.facebook.com/share.php?u=${parsedShareUrl}?opi=140&quote=${shareText}&tti=1&pagination=1&RowGrid=2`,
        icon: Socialfacebook
      }
    case 'twitter':
      return {
        src: `http://twitter.com/share?url=${parsedShareUrl}&tti=1&pagination=1&RowGrid=2&text=${shareText}`,
        icon: Socialtwitter
      }
    case 'whatsapp':
      return {
        src: `whatsapp://send?text=${shareText} - ${parsedShareUrl}`,
        icon: Commentsquare
      }
    case 'email':
      return {
        icon: Envelopeclosed
      }
    default:
      return {}
  }
}

const ButtonShare = ({type, icon, onClick, shareText, url}) => {
  const shareDefinition = getShareDefinition(url, shareText, type)
  const Icon = icon || shareDefinition.icon
  return <button
    className={cx('sui-ButtonShare', `sui-ButtonShare--${type}`)}
    onClick={!onClick ? getOnClickHandle(shareDefinition.src) : onClick}
  >
    <Icon
      svgClass='sui-ButtonShare-svgIcon'
      fillColor={false}
    />
  </button>
}

ButtonShare.displayName = 'ButtonShare'

ButtonShare.propTypes = {
  /**
   * One of the enum types ['facebook', 'whatsapp', 'twitter', 'email']
   * used to know which social media button is going to be rendered
   */
  type: PropTypes.oneOf(['facebook', 'whatsapp', 'twitter', 'email', 'custom']).isRequired,
  /**
   * A class definition, not instance, of our react icon component.
   */
  icon: PropTypes.func,
  /**
   * Callback function to be called onClick button. Default type onClick is handled if no onClick is provided
   */
  onClick: PropTypes.func,
  /**
   * The text to put as message on the share. Only twitter and whatsapp have this feature.
   */
  shareText: PropTypes.string,
  /**
   * A valid scheme url. Starting with http:// or https:// if non protocol is provided the component will fall setting http:// by default
   */
  url: PropTypes.string
}

ButtonShare.defaultProps = {
  shareText: ''
}

export default ButtonShare
