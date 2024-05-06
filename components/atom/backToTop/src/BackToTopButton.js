import {forwardRef} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import {BASE_CLASS, CLASS_HIDE, CLASS_ICON, CLASS_READY, CLASS_SHOW, CLASS_TEXT} from './config.js'

const BackToTopButton = forwardRef(({show, scrollToTop, iconTop, textTop, style}, forwardedRef) => {
  return (
    <button
      title="Back to top"
      className={cx(
        BASE_CLASS,
        `${BASE_CLASS}--${style}`,
        show !== null && CLASS_READY,
        show ? CLASS_SHOW : CLASS_HIDE
      )}
      ref={forwardedRef}
      onClick={scrollToTop}
    >
      {iconTop && <span className={CLASS_ICON}>{iconTop}</span>}
      {textTop && <span className={CLASS_TEXT}>{textTop}</span>}
    </button>
  )
})

BackToTopButton.displayName = 'BackToTopButton'

BackToTopButton.propTypes = {
  show: PropTypes.bool,
  iconTop: PropTypes.node,
  textTop: PropTypes.string,
  scrollToTop: PropTypes.func,
  style: PropTypes.string
}

BackToTopButton.displayName = 'BackToTopButton'

export default BackToTopButton
