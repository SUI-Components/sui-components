import cx from 'classnames'
import PropTypes from 'prop-types'

import {
  BASE_CLASS,
  BORDER_RADIUS,
  CLASS_HIGHLIGHT,
  CLASS_INFO,
  CLASS_LINK,
  CLASS_MEDIA,
  CLASS_RESPONSIVE,
  CLASS_VERTICAL,
  ELEVATION,
  redirectToHref
} from './config.js'

const AtomCard = ({
  media: Media,
  content: Content,
  vertical,
  responsive,
  rounded,
  elevation,
  highlight,
  href,
  blank,
  onClick,
  tabIndex,
  ...props
}) => {
  const onClickHandler = e => {
    typeof onClick === 'function' ? onClick(e) : redirectToHref({href, blank})
  }
  const redirectOnEnter = e => {
    if (e.key === 'Enter') redirectToHref({href, blank})
  }

  const isVertical = vertical && !responsive

  const classNames = cx(
    BASE_CLASS,
    isVertical && CLASS_VERTICAL,
    responsive && CLASS_RESPONSIVE,
    href && CLASS_LINK,
    onClick && CLASS_LINK,
    highlight && (href || onClick) && CLASS_HIGHLIGHT,
    rounded && `${BASE_CLASS}--rounded-${rounded}`,
    elevation && `${BASE_CLASS}--elevation-${elevation}`
  )

  return (
    <div
      className={classNames}
      onClick={onClickHandler}
      onKeyDown={redirectOnEnter}
      tabIndex={tabIndex}
      {...(!href && {role: 'button'})}
      {...props}
    >
      {Media && (
        <div className={CLASS_MEDIA}>
          <Media />
        </div>
      )}

      <div className={CLASS_INFO}>{Content && <Content />}</div>
    </div>
  )
}

AtomCard.displayName = 'AtomCard'

AtomCard.propTypes = {
  /** HTML (component) to be displayed on the left/right side. It's an optional component */
  media: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

  /** HTML (component) to be displayed on the other side */
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

  /** true for vertical layout */
  vertical: PropTypes.bool,

  /** true for make responsive layout */
  responsive: PropTypes.bool,

  /** Specify the border-radius of the card  */
  rounded: PropTypes.oneOf(Object.values(BORDER_RADIUS)),

  /** Specify the box-shadow of the card  */
  elevation: PropTypes.oneOf(Object.values(ELEVATION)),

  /** true for highlight mode */
  highlight: PropTypes.bool,

  /** url target of the card */
  href: PropTypes.string,

  /** true to open a new tab */
  blank: PropTypes.bool,

  /** tab order */
  tabIndex: PropTypes.string,

  /**  */
  onClick: PropTypes.func
}

export default AtomCard

export {BORDER_RADIUS as atomCardRounded, ELEVATION as atomCardElevation}
