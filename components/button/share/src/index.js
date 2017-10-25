import React, { PropTypes } from 'react'
import cx from 'classnames'

function ButtonShare ({ type, icon, onClick, shareText, url }) {
  const parseHttpSchemeOfUrl = (urlToEval) => {
    const isUrlValid = urlToEval.match(/http:\/\/|https:\/\//)
    return !isUrlValid ? `http://${urlToEval}` : urlToEval
  }

  const getOnClickHandleByType = (type) => {
    const httpSchemeParseUrl = parseHttpSchemeOfUrl(url)

    const urlShareDefinitionByType = {
      facebook: `https://www.facebook.com/share.php?u=${httpSchemeParseUrl}?opi=140&tti=1&pagination=1&RowGrid=2`,
      twitter: `http://twitter.com/share?url=${httpSchemeParseUrl}&tti=1&pagination=1&RowGrid=2&text=${shareText}`,
      whatsapp: `whatsapp://send?text=${shareText} - ${httpSchemeParseUrl}`
    }

    return () => window.open(urlShareDefinitionByType[type])
  }

  return <button
    className={cx('sui-ButtonShare', `type-${type}`)}
    onClick={!onClick ? getOnClickHandleByType(type) : onClick}
  />
}

ButtonShare.displayName = 'ButtonShare'

ButtonShare.propTypes = {
  /*
   * One of the enum types ['facebook', 'whatsapp', 'twitter', 'email']
   * used to know which social media button is going to be rendered
   */
  type: PropTypes.oneOf(['facebook', 'whatsapp', 'twitter', 'email']).isRequired,
  icon: PropTypes.string,
  /*
   * Callback function to be called onClick button. Default type onClick is handled if no onClick is provided
   */
  onClick: PropTypes.func,
  /*
   * The text to put as message on the share. Only twitter and whatsapp have this feature.
   */
  shareText: PropTypes.string,
  /*
   * A valid scheme url. Starting with http:// or https:// if non protocol is provided the component will fall setting http:// by default
   */
  url: PropTypes.string
}

ButtonShare.defaultProps = {
  shareText: ''
}

export default ButtonShare
