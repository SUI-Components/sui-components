import React, { PropTypes } from 'react'
import cx from 'classnames'

function ButtonShare ({ type, icon, onClick, shareText, url }) {
  const checkHttpSchemeOfUrl = (urlToEval) => {
    const isUrlValid = urlToEval.match(/http:\/\/|https:\/\//)
    return !isUrlValid ? `http://${urlToEval}` : urlToEval
  }

  const getOnClickHandleByType = (type) => {
    const httpSchemeCheckedUrl = checkHttpSchemeOfUrl(url)

    const urlShareDefinitionByType = {
      facebook: `https://www.facebook.com/share.php?u=${httpSchemeCheckedUrl}?opi=140&tti=1&pagination=1&RowGrid=2`,
      twitter: `http://twitter.com/share?url=${httpSchemeCheckedUrl}&tti=1&pagination=1&RowGrid=2&text=${shareText}`,
      whatsapp: `whatsapp://send?text=${shareText} - ${httpSchemeCheckedUrl}`
    }

    return () => window.open(urlShareDefinitionByType[type])
  }

  return <button
    className={cx('sui-ButtonShare', `type-${type}`)}
    onClick={!onClick ? getOnClickHandleByType(type) : onClick}
  />
}

ButtonShare.displayName = 'ButtonShare'

// Remove these comments if you need
// ButtonShare.contextTypes = {i18n: React.PropTypes.object}
ButtonShare.propTypes = {
  type: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  shareText: PropTypes.string,
  shareUrl: PropTypes.string
}

ButtonShare.defaultProps = {
  shareText: ''
}

// ButtonShare.defaultProps = {}

export default ButtonShare
